import { ReactNode } from 'react'
import { Button } from './ui/shadcn/button'

interface iButtonBlack {
  children: ReactNode
  className?: string
}

export default function ButtonBlack({ children, className }: iButtonBlack) {
  return (
    <Button
      className={`rounded-3xl w-full transition-all duration-300 cursor-pointer py-6 ${className}`}
    >
      {children}
    </Button>
  )
}
