import { Button } from '../ui/shadcn/button'
import { useEffect, useState } from 'react'
import { Separator } from '../ui/shadcn/separator'
import { iProduct } from '@/interfaces/iProduct'
import Rating from '../rating'
import { Lens } from '../ui/magic-ui/lens'

export default function ProductDetails({
  id,
  title,
  rating,
  price,
  discountPercentage,
  description,
  images,
}: iProduct) {
  const [selectedImage, setSelectedImage] = useState('')

  console.log(id)

  useEffect(() => {
    setSelectedImage(images[0])
  }, [images])

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="col-span-full md:order-2 bg-[#F0EEED] rounded-4xl w-full h-[290px] md:h-[370px]">
          <Lens>
            <div className="bg-[#F0EEED] rounded-4xl w-full h-[290px] md:h-[370px] ">
              <img
                src={selectedImage}
                alt={title}
                className="w-full h-full object-contain "
              />
            </div>
          </Lens>
        </div>

        {images.length > 1 && (
          <div
            className="md:py-2 md:col-end-1 md:order-1 flex md:flex-col md:max-h-[370px] items-center gap-4 overflow-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {images.map((data, index) => (
              <span
                className={`flex-1 min-w-[110px] sm:max-w-[110px] h-[106px] md:min-h-[106px]
                 bg-[#F0EEED] rounded-4xl cursor-pointer
                ${selectedImage === data ? 'border border-black' : ''}
                `}
                key={index}
                onClick={() => setSelectedImage(data)}
              >
                <img
                  src={data}
                  alt={`Thumbnail ${data}`}
                  className="w-full h-full object-cover"
                />
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-integral-bold">{title}</h1>

        <Rating ratingValue={rating} />

        <div className="text-2xl flex items-center gap-2">
          <span className="font-semibold">${price} </span>
          <span className="font-semibold text-gray-400 line-through">
            {((price * discountPercentage) / 100).toFixed(2)}
          </span>
          <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2">
            -{discountPercentage}%
          </span>
        </div>

        <p className="text-sm">{description}</p>

        <Separator />

        <div>
          <span>Select Colors</span>
          <div className="flex items-center gap-1">
            <Button size={'icon'} className="rounded-full bg-red-800" />
            <Button size={'icon'} className="rounded-full" />
            <Button size={'icon'} className="rounded-full bg-green-700" />
          </div>
        </div>

        <Separator />

        <div className="flex items-center">
          <div className="font-semibold  flex items-center justify-between overflow-hidden bg-gray-100 rounded-4xl w-[110px]">
            <button className="transition-all duration-300 cursor-pointer p-3 hover:bg-red-400">
              -
            </button>
            <span>1</span>
            <button className="transition-all duration-300 cursor-pointer p-3 hover:bg-green-400 ">
              +
            </button>
          </div>
          <Button className="ml-4 rounded-4xl w-full max-w-[230px] py-6">
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  )
}
