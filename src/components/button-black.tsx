import { ReactNode } from 'react'
import { Button, ButtonProps } from './ui/shadcn/button'

interface iButtonBlack extends ButtonProps {
  children: ReactNode
  className?: string
}

export default function ButtonBlack({
  children,
  className,
  ...props
}: iButtonBlack) {
  return (
    <Button
      className={`rounded-3xl w-full transition-all duration-300 cursor-pointer py-6 ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
