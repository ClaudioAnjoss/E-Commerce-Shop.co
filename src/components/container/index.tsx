import { ReactNode } from 'react'

interface iContainer {
  classname?: string
  children: ReactNode
}

export default function Container({ classname, children }: iContainer) {
  return <div className={`container mx-auto ${classname}`}>{children}</div>
}
