import { Star } from 'lucide-react'
import camisa from '@/assets/clothes/camisa-preta.png'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/shadcn/pagination'
import { MenuDrawer } from './menu-drawer'
import { FilteredProducts } from './filtered-product'
import { Link } from 'react-router'

export default function ChooseProduct() {
  return (
    <section className="grid md:grid-cols-[200px_1fr] gap-4">
      <div className="hidden md:block md:col-span-1 md:row-span-2">
        <FilteredProducts accordionOpen />
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-end gap-2">
          <h1 className="font-semibold text-2xl">Casual</h1>
          <span className="text-sm font-light">
            Showing 1-10 of 100 Products
          </span>
        </span>
        <MenuDrawer className="md:hidden" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 min-h-[50dvh]">
        {Array.from({ length: 6 }).map((_, index) => (
          <Link to={`${index}`} key={index}>
            <div className="max-w-[172px] h-[174px] bg-[#F0EEED] rounded-4xl overflow-hidden">
              <img src={camisa} alt="" />
            </div>

            <h1>Gradient Graphic T-shirt</h1>

            <span className="flex items-center">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </span>

            <div className="text-[20px] flex items-center gap-2">
              <span className="font-semibold">$260 </span>
              <span className="font-semibold text-gray-400 line-through">
                $300
              </span>
              <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2">
                -40%
              </span>
            </div>
          </Link>
        ))}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
