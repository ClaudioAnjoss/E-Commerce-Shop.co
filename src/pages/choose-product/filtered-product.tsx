import { X } from 'lucide-react'
import { DrawerClose } from '@/components/ui/shadcn/drawer'
import { Separator } from '@/components/ui/shadcn/separator'
import { Slider } from '@/components/ui/shadcn/slider'
import TitleDrawer from './title-drawer'
import AccordionDrawer from './accordion-drawer'
import { categories } from '@/database/categories'
import { Button } from '@/components/ui/shadcn/button'
import { iFilters } from '@/interfaces/iFilters'

const discountOptions = [0, 10, 20, 30, 50]
const tagOptions = [
  'Novidade',
  'Promoção',
  'Mais vendidos',
  'Limitado',
  'Exclusivo',
]
const brandOptions = ['Apple', 'Samsung', 'Xiaomi', 'LG', 'Sony']

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
  return (
    <div className="p-4 flex flex-col gap-4 border rounded-2xl">
      <div className="flex items-center justify-between">
        <TitleDrawer>Filters</TitleDrawer>

        {/* Clear */}
        <Button
          variant={'link'}
          className="p-0 cursor-pointer"
          onClick={() =>
            onFilters?.({
              category: '',
              price: [0, 500],
              discount: 0,
              rating: 0,
              stock: 0,
              tag: '',
              brand: '',
            })
          }
        >
          Limpar
        </Button>

        {isDrawer && (
          <DrawerClose>
            <X />
          </DrawerClose>
        )}
      </div>

      <Separator />

      {/* Categories */}
      <AccordionDrawer title="Categories" accordionOpen={accordionOpen}>
        {categories.map((data) => (
          <button
            key={data}
            onClick={() =>
              onFilters?.((prev) => ({
                ...prev,
                category: data,
              }))
            }
            className="p-1 flex items-center justify-between text-sm cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            {data
              .replace(/womens|-|mens/g, '')
              .replace('sportsaccessories', 'sports accessories')
              .toUpperCase()}
          </button>
        ))}
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
            const isSelected = percent === 0

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
                {percent === 0 ? 'Sem desconto' : `${percent}%`}
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

      <AccordionDrawer title="Stock" accordionOpen={accordionOpen}>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Todos', value: 0 },
            { label: 'Em estoque', value: 1 },
            { label: 'Pouco estoque', value: 10 },
            { label: 'Muito estoque', value: 50 },
          ].map(({ label, value }) => {
            const isSelected = filters?.stock === value

            return (
              <button
                key={value}
                className={`px-3 py-1 rounded-full border text-sm transition
            ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                onClick={() =>
                  onFilters?.((prev) => ({
                    ...prev,
                    stock: value,
                  }))
                }
              >
                {label}
              </button>
            )
          })}
        </div>
      </AccordionDrawer>
      <AccordionDrawer title="Tags" accordionOpen={accordionOpen}>
        <div className="flex flex-wrap gap-2">
          {tagOptions.map((tag) => {
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

      <AccordionDrawer title="Brands" accordionOpen={accordionOpen}>
        <AccordionDrawer title="Brands" accordionOpen={accordionOpen}>
          <div className="flex flex-col gap-2">
            {brandOptions.map((brand) => {
              const isChecked = filters?.brand.includes(brand)

              return (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      onFilters?.((prev) => {
                        const newBrands = isChecked
                          ? prev.brand.filter((b) => b !== brand)
                          : [...prev.brand, brand]

                        return {
                          ...prev,
                          brand: newBrands,
                        }
                      })
                    }
                  />
                  {brand}
                </label>
              )
            })}
          </div>
        </AccordionDrawer>
      </AccordionDrawer>
    </div>
  )
}
