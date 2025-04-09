import { SlidersVertical } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/shadcn/drawer'
import { FilteredProducts } from './filtered-product'

interface iMenuDrawer {
  className?: string
}

export function MenuDrawer({ className }: iMenuDrawer) {
  return (
    <Drawer>
      <DrawerTrigger asChild className={`${className}`}>
        <Button
          variant={'outline'}
          className="rounded-full bg-gray-100 border-none"
        >
          <SlidersVertical />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <FilteredProducts isDrawer />
      </DrawerContent>
    </Drawer>
  )
}
