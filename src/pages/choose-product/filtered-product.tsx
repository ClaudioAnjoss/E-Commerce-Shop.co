import { ChevronRight, X } from 'lucide-react'
import { DrawerClose } from '@/components/ui/shadcn/drawer'
import { Separator } from '@/components/ui/shadcn/separator'
import { Slider } from '@/components/ui/shadcn/slider'
import TitleDrawer from './title-drawer'
import AccordionDrawer from './accordion-drawer'
import { categories } from '@/database/categories'

const colors = [
  'bg-slate-500',
  'bg-red-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-green-500',
  'bg-emerald-500',
]

const sizes = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
  'double-extra-large',
  'triple-extra-large',
  'one-size',
]

interface iFilteredProducts {
  accordionOpen?: boolean
  isDrawer?: boolean
  onCategoryClick?: (category: string) => void
}

export function FilteredProducts({
  accordionOpen,
  isDrawer,
  onCategoryClick,
}: iFilteredProducts) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <TitleDrawer>Filters</TitleDrawer>
        {isDrawer && (
          <DrawerClose>
            <X />
          </DrawerClose>
        )}
      </div>

      <Separator />

      {categories.map((data) => (
        <button
          key={data}
          onClick={() => onCategoryClick?.(data)}
          className="flex items-center justify-between"
        >
          {data.toUpperCase()} <ChevronRight />
        </button>
      ))}

      {/* <div className="flex flex-col gap-2">
        <span className="flex items-center justify-between">
          T-shirts <ChevronRight />
        </span>
        <span className="flex items-center justify-between">
          T-shirts <ChevronRight />
        </span>
        <span className="flex items-center justify-between">
          T-shirts <ChevronRight />
        </span>
        <span className="flex items-center justify-between">
          T-shirts <ChevronRight />
        </span>
      </div> */}

      <Separator />

      <AccordionDrawer title="Price" accordionOpen={accordionOpen}>
        <Slider className="my-5" min={0} max={100} defaultValue={[20, 80]} />
      </AccordionDrawer>

      <AccordionDrawer title="Colors" accordionOpen={accordionOpen}>
        <div className="flex flex-wrap gap-1">
          {colors.map((color, index) => (
            <button
              className={`border rounded-full ${color} p-4`}
              key={index}
            ></button>
          ))}
        </div>
      </AccordionDrawer>

      <AccordionDrawer title="Size">
        <div className="flex flex-wrap gap-2 justify-start">
          {sizes.map((size, index) => (
            <button className="border rounded-full py-3 px-4" key={index}>
              {size}
            </button>
          ))}
        </div>
      </AccordionDrawer>

      <AccordionDrawer title="Dress Style">
        <div className="flex flex-col gap-2">
          <span className="flex items-center justify-between">
            T-shirts <ChevronRight />
          </span>
          <span className="flex items-center justify-between">
            T-shirts <ChevronRight />
          </span>
          <span className="flex items-center justify-between">
            T-shirts <ChevronRight />
          </span>
          <span className="flex items-center justify-between">
            T-shirts <ChevronRight />
          </span>
          <span className="flex items-center justify-between">
            T-shirts <ChevronRight />
          </span>
        </div>
      </AccordionDrawer>
    </div>
  )
}
