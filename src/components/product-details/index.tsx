import { Star } from 'lucide-react'
import { Button } from '../ui/shadcn/button'
import { useState } from 'react'
import { Separator } from '../ui/shadcn/separator'

const images: string[] = [
  'https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/a/m/amarela1_1.png',
  'https://d5gag3xtge2og.cloudfront.net/producao/35059465/G/m_0103_13000640906.png',
  'https://lojapalmeiras.vtexassets.com/arquivos/ids/187134-800-auto?v=638657302347100000&width=800&height=auto&aspect=true',
  'https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/a/m/amarela1_1.png',
  'https://d5gag3xtge2og.cloudfront.net/producao/35059465/G/m_0103_13000640906.png',
  'https://lojapalmeiras.vtexassets.com/arquivos/ids/187134-800-auto?v=638657302347100000&width=800&height=auto&aspect=true',
]

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="col-span-full md:order-2 bg-[#F0EEED] rounded-4xl w-full h-[290px] md:h-[370px]">
          <img
            src={selectedImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

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
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-integral-bold">
          One Life Graphic T-shirt
        </h1>
        <span className="flex items-center">
          <Star color="yellow" cursor={'pointer'} />
          <Star color="yellow" />
          <Star color="yellow" />
          <Star color="yellow" />
          <Star color="yellow" />
        </span>

        <div className="text-2xl flex items-center gap-2">
          <span className="font-semibold">$260 </span>
          <span className="font-semibold text-gray-400 line-through">$300</span>
          <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2">
            -40%
          </span>
        </div>

        <p className="text-sm">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>

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
