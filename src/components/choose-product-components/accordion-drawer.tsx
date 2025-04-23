import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/shadcn/accordion'
import { ReactNode } from 'react'

interface iAccordionDrawer {
  title: string
  accordionOpen?: boolean
  children: ReactNode
}

export default function AccordionDrawer({
  title,
  accordionOpen,
  children,
}: iAccordionDrawer) {
  return (
    <Accordion
      type="single"
      defaultValue={accordionOpen ? 'show' : ''}
      collapsible
    >
      <AccordionItem value="show">
        <AccordionTrigger className="text-[20px] font-semibold">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
