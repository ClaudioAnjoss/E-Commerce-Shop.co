import { MenuDrawer } from './menu-drawer'
import { FilteredProducts } from './filtered-product'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import Rating from '@/components/rating'
import { useEffect, useState } from 'react'

import { getAllProducts } from '@/services/get-all-products'
import { Skeleton } from '@/components/ui/shadcn/skeleton'
import FadeContent from '@/components/ui/react-bits/fade-content'
import SplitText from '@/components/ui/react-bits/split-text'
import { iProduct } from '@/interfaces/iProduct'
import { iFilters } from '@/interfaces/iFilters'

export default function ChooseProduct() {
  const [filters, setFilters] = useState<iFilters>({
    category: '',
    price: [0, 500],
    discount: 0,
    rating: 0,
    stock: 0,
    tag: '',
    brand: '',
  })
  const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([])

  const { data: allProducts, isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
  })

  console.log('filtros aplicados:', filters)
  console.log('lista filtrada:', filteredProducts)

  useEffect(() => {
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    })

    const hasFilters =
      filters.category !== '' ||
      filters.price[0] !== 0 ||
      filters.price[1] !== 500 ||
      filters.discount !== 0 ||
      filters.rating !== 0 ||
      filters.stock !== 0 ||
      filters.tag !== '' ||
      (Array.isArray(filters.brand)
        ? filters.brand.length > 0
        : filters.brand !== '')

    if (!hasFilters) {
      setFilteredProducts(allProducts?.products || [])
      return
    }

    const filtered = allProducts?.products.filter((product) => {
      const { category, price, discount, rating, stock, tag, brand } = filters

      return (
        (!category || product.category === category) &&
        product.price >= price[0] &&
        product.price <= price[1] &&
        (!discount || product.discount >= discount) &&
        (!rating || product.rating <= rating) &&
        (!stock || product.stock >= stock) &&
        (!tag || product.tags?.includes(tag)) &&
        (!brand ||
          (Array.isArray(brand)
            ? brand.includes(product.brand)
            : product.brand === brand))
      )
    })

    setFilteredProducts(filtered || [])
  }, [filters, allProducts])

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
        <div className="flex items-center h-fit justify-between ">
          <div className="flex items-end gap-2">
            <SplitText
              text={filters.category
                .replace(/womens|-|mens/g, '')
                .replace('sportsaccessories', 'sports accessories')
                .toUpperCase()}
              className="font-semibold text-2xl"
              delay={150}
              animationFrom={{
                opacity: 0,
                transform: 'translate3d(0,50px,0)',
              }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />

            <span className="text-sm font-light">
              Showing{' '}
              {filteredProducts ? filteredProducts.length : allProducts?.total}{' '}
              Products
            </span>
          </div>
          <MenuDrawer className="md:hidden" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {filteredProducts.map(
            ({ id, title, rating, price, discountPercentage, thumbnail }) => (
              <FadeContent
                key={id}
                blur={true}
                duration={500}
                easing="ease-out"
                initialOpacity={0}
              >
                <Link to={String(id)} className="max-w-[300px]">
                  <div className="w-full bg-[#F0EEED] rounded-4xl overflow-hidden">
                    <img src={thumbnail} alt={title} />
                  </div>

                  <h1>{title}</h1>

                  <Rating ratingValue={rating} />

                  <div className="text-[20px] flex items-center gap-2 max-w-[250px]  line-clamp-1">
                    <span className="font-semibold">${price.toFixed(2)} </span>
                    <span className="font-semibold text-gray-400 line-through">
                      ${((price * discountPercentage) / 100).toFixed(2)}
                    </span>
                    <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2 line-clamp-1">
                      -{discountPercentage}%
                    </span>
                  </div>
                </Link>
              </FadeContent>
            ),
          )}
          {!filteredProducts &&
            allProducts?.products.map(
              ({ id, title, rating, price, discountPercentage, thumbnail }) => (
                <FadeContent
                  key={id}
                  blur={true}
                  duration={500}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <Link to={String(id)} className="max-w-[300px]">
                    <div className="w-full bg-[#F0EEED] rounded-4xl overflow-hidden">
                      <img src={thumbnail} alt={title} />
                    </div>

                    <h1>{title}</h1>

                    <Rating ratingValue={rating} />

                    <div className="text-[20px] flex items-center gap-2 max-w-[250px]  line-clamp-1">
                      <span className="font-semibold">
                        ${price.toFixed(2)}{' '}
                      </span>
                      <span className="font-semibold text-gray-400 line-through">
                        ${((price * discountPercentage) / 100).toFixed(2)}
                      </span>
                      <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2 line-clamp-1">
                        -{discountPercentage}%
                      </span>
                    </div>
                  </Link>
                </FadeContent>
              ),
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
