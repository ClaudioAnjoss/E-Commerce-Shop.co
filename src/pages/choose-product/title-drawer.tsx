import { ReactNode } from 'react'

export default function TitleDrawer(props: { children: ReactNode }) {
  return <h1 className="text-[20px] font-semibold">{props.children}</h1>
}
