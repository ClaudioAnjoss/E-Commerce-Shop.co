import { iClothingItem } from '@/database/clothes'
import Container from '../container'
import { Button } from '../ui/shadcn/button'

interface iClothingListProps {
  title: string
  items: iClothingItem[]
}

export default function ClothingList({ title, items }: iClothingListProps) {
  return (
    <Container classname="flex flex-col gap-8">
      <h1 className="mt-10 text-5xl text-center font-integral-bold">{title}</h1>
      <div className="flex gap-4 p-2 overflow-x-auto ">
        {items.map(({ id, name, description, price, imageUrl }) =>
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`${id}-${index}`}
              className="flex flex-col p-2 max-w-[300px]"
            >
              <div className="bg-[#F0EEED] rounded-3xl min-w-[300px] overflow-hidden">
                <img src={imageUrl} alt={name} className="w-full h-auto" />
              </div>
              <h2 className="font-bold">{name}</h2>
              <p className="font-light truncate">{description}</p>
              <span className="font-bold text-lg">${price}</span>
            </div>
          )),
        )}
      </div>
      <Button
        className="rounded-3xl text-lg px-20 py-6 mx-auto border"
        variant={'ghost'}
      >
        View All
      </Button>
    </Container>
  )
}
