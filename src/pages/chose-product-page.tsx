import { MenuDrawer } from '../components/choose-product-components/menu-drawer'
import { FilteredProducts } from '../components/choose-product-components/filtered-product'
import { Link, useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import Rating from '@/components/rating'
import { useEffect, useMemo, useState } from 'react'
import { getAllProducts } from '@/services/get-all-products'
import { Skeleton } from '@/components/ui/shadcn/skeleton'
import FadeContent from '@/components/ui/react-bits/fade-content'
import SplitText from '@/components/ui/react-bits/split-text'
import { iFilters } from '@/interfaces/iFilters'
import { Button } from '@/components/ui/shadcn/button'
import { MdSearchOff } from 'react-icons/md'

const initialFilters = {
  category: '',
  price: [0, 500],
  discount: 0,
  rating: 0,
  tag: '',
  brand: '',
  search: '',
}

export default function ChooseProduct() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')
  const tagUrl = searchParams.get('tag')
  const [filters, setFilters] = useState<iFilters>(initialFilters)
  const { data: allProducts, isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
  })

  console.log(filters)

  useEffect(() => {
    if (search || tagUrl) {
      setFilters((prev) => ({
        ...prev,
        search: search || '',
        tag: tagUrl || '',
      }))
    }
  }, [search, tagUrl])

  const filteredProducts = useMemo(() => {
    if (!allProducts?.products) return []

    return allProducts.products.filter((product) => {
      const { category, price, discount, rating, tag, brand, search } = filters

      const matchesFilters =
        (!category || product.category === category) &&
        product.price >= price[0] &&
        product.price <= price[1] &&
        (!discount || product.discountPercentage >= discount) &&
        (!rating || product.rating <= rating) &&
        (!tag || product.tags?.includes(tag)) &&
        (!brand ||
          (Array.isArray(brand)
            ? brand.includes(product.brand)
            : product.brand === brand)) &&
        (!search || product.title?.toLowerCase().includes(search.toLowerCase()))

      return matchesFilters
    })
  }, [allProducts, filters])

  function hasFilters() {
    return JSON.stringify(filters) !== JSON.stringify(initialFilters) || search
  }

  useEffect(() => {
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    })
  }, [filters])

  return (
    <section className="grid md:grid-cols-[200px_1fr] gap-4 ">
      <div className="hidden md:block md:col-span-1 md:row-span-2">
        <FilteredProducts
          accordionOpen
          filters={filters}
          onFilters={setFilters}
        />
      </div>
      <section>
        {search && (
          <SplitText
            text={`Results for: ${search}`}
            className="font-semibold font-integral-bold text-2xl"
            delay={150}
          />
        )}

        <div className="flex items-center h-fit justify-between ">
          <SplitText
            text={
              filters.category
                ? filters.category
                    .replace(/womens|-|mens/g, '')
                    .replace('sportsaccessories', 'sports accessories')
                    .toUpperCase()
                : 'All'
            }
            className="font-semibold text-2xl"
            delay={150}
          />

          <span className="text-sm font-light mr-auto">
            Showing{' '}
            {filteredProducts ? filteredProducts.length : allProducts?.total}{' '}
            Products
          </span>

          <MenuDrawer className="md:hidden max-h-[80px] overflow-auto">
            <FilteredProducts
              isDrawer
              accordionOpen={false}
              filters={filters}
              onFilters={setFilters}
            />
          </MenuDrawer>
          <Button
            variant={'ghost'}
            className={`${hasFilters() ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => {
              setFilters(initialFilters)
              searchParams.delete('search')
              searchParams.delete('brands')
              setSearchParams(searchParams)
            }}
          >
            Clear
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {filteredProducts.length
            ? filteredProducts.map(
                ({
                  id,
                  title,
                  rating,
                  price,
                  discountPercentage,
                  thumbnail,
                }) => (
                  <FadeContent
                    key={id}
                    blur={true}
                    duration={500}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <Link to={`${id}/${title}`}>
                      <div className="max-w-[150px] md:max-w-[300px] flex flex-col justify-between  h-full">
                        <div className=" w-full bg-[#F0EEED] rounded-4xl overflow-hidden">
                          <img src={thumbnail} alt={title} />
                        </div>
                        <h1>{title}</h1>
                        <Rating ratingValue={rating} />
                        <div className="md:text-[20px] flex items-center gap-2 max-w-[250px]  line-clamp-1">
                          <span className="font-semibold">
                            ${price.toFixed(2)}{' '}
                          </span>
                          <span className="hidden md:block text-xs md:text-[20px] font-semibold text-gray-400 line-through">
                            ${((price * discountPercentage) / 100).toFixed(2)}
                          </span>
                          <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2 line-clamp-1">
                            -{discountPercentage}%
                          </span>
                        </div>
                      </div>
                    </Link>
                  </FadeContent>
                ),
              )
            : !isLoading && (
                <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center text-zinc-500">
                  <MdSearchOff className="w-16 h-16 text-zinc-400" />
                  <h3 className="text-lg font-medium">
                    Nenhum produto encontrado
                  </h3>
                  <p>
                    Desculpe, não encontramos nenhum produto que corresponda à
                    sua busca ou filtros.
                  </p>
                </div>
              )}

          {isLoading &&
            Array.from({ length: 12 }).map((_, index) => (
              <FadeContent
                key={index}
                blur={true}
                duration={2000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[250px] w-[300px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </FadeContent>
            ))}
        </div>
      </section>
    </section>
  )
}
