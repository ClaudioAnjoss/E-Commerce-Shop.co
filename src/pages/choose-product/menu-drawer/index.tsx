import { ChevronRight, SlidersVertical, X } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/shadcn/drawer'
import { Separator } from '@/components/ui/shadcn/separator'
import { Slider } from '@/components/ui/shadcn/slider'
import TitleDrawer from './title-drawer'

const colors = [
  'bg-slate-500',
  'bg-red-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-purple-500',
  'bg-fuchsia-500',
  'bg-pink-500',
  'bg-rose-500',
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

export function MenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={'outline'}
          className="rounded-full bg-gray-100 border-none"
        >
          <SlidersVertical />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <TitleDrawer>Filters</TitleDrawer>
          <button>
            <X />
          </button>
        </div>

        <Separator />

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

        <Separator />

        <TitleDrawer>Price</TitleDrawer>

        <Slider min={0} max={100} defaultValue={[20, 80]} />

        <Separator />

        <TitleDrawer>Colors</TitleDrawer>

        <div className="flex flex-wrap gap-1">
          {colors.map((color, index) => (
            <button
              className={`border rounded-full ${color} p-4`}
              key={index}
            ></button>
          ))}
        </div>

        <Separator />

        <TitleDrawer>Size</TitleDrawer>

        <div className="flex flex-wrap gap-2 justify-start">
          {sizes.map((size, index) => (
            <button className="border rounded-full py-3 px-4" key={index}>
              {size}
            </button>
          ))}
        </div>

        <Separator />

        <TitleDrawer>Dress Style</TitleDrawer>

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
      </DrawerContent>
    </Drawer>
  )
}
