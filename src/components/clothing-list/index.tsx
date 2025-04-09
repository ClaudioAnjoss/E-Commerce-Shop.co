import { iClothingItem } from '@/database/clothes'
import Container from '../container'
import { Button } from '../ui/shadcn/button'
import Title from '../title'

interface iClothingListProps {
  title?: string
  button?: string
  items: iClothingItem[]
}

export default function ClothingList({
  title,
  button,
  items,
}: iClothingListProps) {
  return (
    <Container classname="flex flex-col max-w-screen gap-4 pb-4">
      {title && <Title className="mx-auto">{title}</Title>}
      <div className="flex gap-4 overflow-x-auto ">
        {items.map(({ id, name, description, price, imageUrl }) =>
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`${id}-${index}`}
              className="flex flex-col p-2 max-w-[300px]"
            >
              <div className="bg-[#F0EEED] rounded-3xl min-w-[300px] overflow-hidden">
                <img src={imageUrl} alt={name} className="w-full h-auto" />
              </div>
              {name && <h2 className="font-bold">{name}</h2>}
              <p className="font-light truncate">{description}</p>
              <span className="font-bold text-lg">${price}</span>
            </div>
          )),
        )}
      </div>
      {button && (
        <Button
          className="rounded-3xl text-lg px-20 py-6 mx-auto border"
          variant={'ghost'}
        >
          {button}
        </Button>
      )}
    </Container>
  )
}
