import Title from '../title'
import { Link } from 'react-router'
import SkeletonClothing from './skeleton-clothing-list'
import { useQuery } from '@tanstack/react-query'
import { getByParams } from '@/services/get-by-params'
import { IResponse } from '@/interfaces/IResponse'
import ButtonWhite from '../button-white'

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
  const { data: categorys, isLoading } = useQuery<IResponse>({
    queryKey: [category],
    queryFn: () =>
      getByParams(`product/category/${category}`) as Promise<IResponse>,
  })

  return (
    <div className="flex flex-col max-w-screen gap-4 pb-4">
      {title && <Title className="mx-auto">{title.replace('-', ' ')}</Title>}

      <div className="flex gap-4 overflow-x-auto ">
        {categorys?.products?.map(
          ({ id, title, description, price, thumbnail }) => (
            <div
              key={id}
              className="cursor-pointer flex flex-col p-2 max-w-[300px]"
            >
              <Link to={`/shop/${id}/${title}`}>
                <div className="bg-[#F0EEED] rounded-3xl min-w-[300px] overflow-hidden">
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
          ),
        )}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <SkeletonClothing key={index} />
          ))}
      </div>
      {button && (
        <Link className="mx-auto" to={`/shop?tag=${category}`}>
          <ButtonWhite>{button}</ButtonWhite>
        </Link>
      )}
    </div>
  )
}
