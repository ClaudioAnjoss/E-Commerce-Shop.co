import { SlidersVertical } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
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
      <DrawerTrigger className={`p-2  border-none ${className}`}>
        <SlidersVertical />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        {children}
      </DrawerContent>
    </Drawer>
  )
}
