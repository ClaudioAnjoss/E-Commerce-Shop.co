import Container from '../container'
import { Button } from '../ui/shadcn/button'
import Title from '../title'
import { useEffect, useState } from 'react'
import { getByCategory } from '@/services/get-by-category'
import { Link } from 'react-router'
import { iProduct } from '@/interfaces/iProduct'

interface iClothingListProps {
  title?: string
  button?: string
  category: string
}

export default function ClothingList({
  title,
  category,
  button,
}: iClothingListProps) {
  const [items, setItems] = useState<iProduct[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await getByCategory(category)

      setItems(Array.isArray(res) ? res : [res])
    }

    fetchData()
  }, [category])

  return (
    <Container classname="flex flex-col max-w-screen gap-4 pb-4">
      {title && <Title className="mx-auto">{title.replace('-', ' ')}</Title>}
      <div className="flex gap-4 overflow-x-auto ">
        {items.length > 0 &&
          items.map(({ id, title, description, price, thumbnail }) => (
            <div
              key={id}
              className="cursor-pointer  flex flex-col p-2 max-w-[300px]"
            >
              <Link to={`/shop/${id}`}>
                <div className=" bg-[#F0EEED] rounded-3xl min-w-[300px] overflow-hidden">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="hover:opacity-80 hover:scale-105 transition-transform w-full h-auto"
                  />
                </div>
                {title && <h2 className="font-bold">{title}</h2>}
                <p className="font-light truncate">{description}</p>
                <span className="font-bold text-lg">${price}</span>
              </Link>
            </div>
          ))}
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
