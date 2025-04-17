import { SlidersVertical } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/shadcn/drawer'
import { ReactNode } from 'react'

interface iMenuDrawer {
  className?: string
  children: ReactNode
}

export function MenuDrawer({ className, children }: iMenuDrawer) {
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
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  )
}
