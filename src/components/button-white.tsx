import { ReactNode } from 'react'
import { Button, ButtonProps } from './ui/shadcn/button'

interface iButtonBlack extends ButtonProps {
  children: ReactNode
  className?: string
}

export default function ButtonWhite({
  children,
  className,
  ...props
}: iButtonBlack) {
  return (
    <Button
      variant={'outline'}
      className={`rounded-3xl w-full transition-all duration-300 cursor-pointer py-6 px-8 ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
