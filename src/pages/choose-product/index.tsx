import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/shadcn/pagination'
import { MenuDrawer } from './menu-drawer'
import { FilteredProducts } from './filtered-product'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getByParams } from '@/services/get-by-params'
import Rating from '@/components/rating'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/shadcn/button'
import { Skeleton } from '@/components/ui/shadcn/skeleton'
import { IResponse } from '@/interfaces/IResponse'

export default function ChooseProduct() {
  const [pagination, setPagination] = useState(0)
  const [category, setCategory] = useState('tops')
  const { data: filteredProducts, isLoading } = useQuery<IResponse>({
    queryKey: ['filtered-products', category, pagination],
    queryFn: () =>
      getByParams(
        `product/category/${category}?limit=20&skip=${pagination}`,
      ) as Promise<IResponse>,
    enabled: !!category,
  })

  useEffect(() => {
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    })
  }, [filteredProducts])

  return (
    <section className="grid md:grid-cols-[200px_1fr] gap-4">
      <div className="hidden md:block md:col-span-1 md:row-span-2">
        <FilteredProducts
          accordionOpen
          onCategoryClick={(value) => setCategory(value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-end gap-2">
          <h1 className="font-semibold text-2xl">{category.toUpperCase()}</h1>
          <span className="text-sm font-light">
            Showing {filteredProducts?.limit} of {filteredProducts?.total}{' '}
            Products
          </span>
        </span>
        <MenuDrawer className="md:hidden" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 min-h-[50dvh]">
        {filteredProducts?.products?.map(
          ({ id, title, rating, price, discountPercentage, thumbnail }) => (
            <Link to={String(id)} key={id} className="max-w-[300px]">
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
          ),
        )}

        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[250px] w-[300px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}

        <Pagination>
          <PaginationContent className="flex justify-around  w-full">
            <PaginationItem>
              <Button
                variant={'outline'}
                onClick={() => setPagination((prev) => prev - 20)}
                disabled={pagination <= 0}
              >
                Previous
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button
                variant={'outline'}
                onClick={() => setPagination((prev) => prev + 20)}
                disabled={pagination >= Number(filteredProducts?.total) - 20}
              >
                Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
