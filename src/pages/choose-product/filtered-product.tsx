import { SlidersVertical, X } from 'lucide-react'
import { DrawerClose } from '@/components/ui/shadcn/drawer'
import { Separator } from '@/components/ui/shadcn/separator'
import { Slider } from '@/components/ui/shadcn/slider'
import TitleDrawer from './title-drawer'
import AccordionDrawer from './accordion-drawer'
import { categories } from '@/database/categories'
import { iFilters } from '@/interfaces/iFilters'
import { useQuery } from '@tanstack/react-query'
import getAllTags from '@/services/get-all-tags'
import getAllBrands from '@/services/get-all-brands'

const discountOptions = [0, 3, 5, 10, 15]

interface iFilteredProducts {
  accordionOpen?: boolean
  isDrawer?: boolean
  filters?: iFilters
  onFilters?: React.Dispatch<React.SetStateAction<iFilters>>
}

export function FilteredProducts({
  accordionOpen,
  isDrawer,
  filters,
  onFilters,
}: iFilteredProducts) {
  const { data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: getAllTags,
  })

  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands,
  })

  return (
    <div
      className={`p-4 flex flex-col gap-2 border rounded-2xl ${isDrawer && 'max-h-[70dvh] overflow-auto'}`}
    >
      <div className="flex items-center justify-between">
        <TitleDrawer>Filters</TitleDrawer>
        {!isDrawer && <SlidersVertical />}

        {isDrawer && (
          <DrawerClose>
            <X />
          </DrawerClose>
        )}
      </div>

      <Separator />

      {/* Categories */}
      <AccordionDrawer title="Categories" accordionOpen={accordionOpen}>
        <button
          onClick={() =>
            onFilters?.((prev) => ({
              ...prev,
              category: '',
            }))
          }
          className="p-1 flex items-center justify-between text-sm cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform"
        >
          All
        </button>
        {categories.map((data) => {
          const isSelected = data === filters?.category

          return (
            <button
              key={data}
              onClick={() =>
                onFilters?.((prev) => ({
                  ...prev,
                  category: data,
                }))
              }
              className={`p-1 flex items-center justify-between text-sm cursor-pointer transition-transform 
        hover:bg-gray-100 hover:scale-105 
        ${isSelected ? 'bg-blue-600 text-white rounded' : ''}`}
            >
              {data
                .replace(/womens|-|mens/g, '')
                .replace('sportsaccessories', 'sports accessories')
                .toUpperCase()}
            </button>
          )
        })}
      </AccordionDrawer>

      {/* Price */}
      <AccordionDrawer title="Price" accordionOpen={accordionOpen}>
        <Slider
          min={0}
          max={500}
          defaultValue={filters?.price}
          value={filters?.price}
          onValueChange={(newValue) =>
            onFilters?.((prev) => ({
              ...prev,
              price: newValue,
            }))
          }
          // onChange={() => onFilters?.(price)}
        />
      </AccordionDrawer>

      {/* Discount */}
      <AccordionDrawer title="Discount" accordionOpen={accordionOpen}>
        <div className="flex gap-1 flex-wrap">
          {discountOptions.map((percent) => {
            const isSelected = percent === filters?.discount

            return (
              <button
                key={percent}
                className={`px-4 py-2 rounded-full border text-sm transition
                ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                onClick={() =>
                  onFilters?.((prev) => ({
                    ...prev,
                    discount: percent,
                  }))
                }
              >
                {percent === 0 ? 'All' : `${percent}%`}
              </button>
            )
          })}
        </div>
      </AccordionDrawer>

      {/* Rating */}
      <AccordionDrawer title="Rating" accordionOpen={accordionOpen}>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              id={String(index)}
              key={index}
              type="radio"
              name="rating-2"
              value={filters?.rating}
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
              onChange={() =>
                onFilters?.((prev) => ({
                  ...prev,
                  rating: index + 1,
                }))
              }
            />
          ))}
        </div>
      </AccordionDrawer>

      {/* Tags */}
      <AccordionDrawer title="Tags">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => {
            const isSelected = filters?.tag === tag

            return (
              <button
                key={tag}
                className={`px-4 py-1 rounded-full border text-sm transition
            ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                onClick={() =>
                  onFilters?.((prev) => ({
                    ...prev,
                    tag: isSelected ? '' : tag, // desseleciona se clicar de novo
                  }))
                }
              >
                {tag}
              </button>
            )
          })}
        </div>
      </AccordionDrawer>

      {/* Brands */}
      <AccordionDrawer title="Brands">
        <div className="flex flex-wrap gap-2">
          {brands?.map((brand) => {
            const isSelected = filters?.brand === brand

            return (
              <button
                key={brand}
                className={`px-4 py-1 rounded-full border text-sm transition
            ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                onClick={() =>
                  onFilters?.((prev) => ({
                    ...prev,
                    brand: isSelected ? '' : brand, // desseleciona se clicar de novo
                  }))
                }
              >
                {brand}
              </button>
            )
          })}
        </div>
      </AccordionDrawer>
    </div>
  )
}
