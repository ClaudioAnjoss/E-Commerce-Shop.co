import { Button } from '@/components/ui/shadcn/button'
import Container from '@/components/container'

import bgMain from '@/assets/bg-home-main.png'
import category1 from '@/assets/categorys/image-1.png'
import category2 from '@/assets/categorys/image-2.png'
import category3 from '@/assets/categorys/image-3.png'
import category4 from '@/assets/categorys/image-4.png'
import versace from '@/assets/brands/versace.png'
import zara from '@/assets/brands/zara.png'
import gucci from '@/assets/brands/gucci.png'
import prada from '@/assets/brands/prada.png'
import calvin from '@/assets/brands/calvin-klein.png'
import ClothingList from '@/components/clothing-list'
import { clothingItems } from '@/database/clothes'
import { Separator } from '@/components/ui/shadcn/separator'
import { Check, MoveLeft, MoveRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <section className="">
      <div className="flex flex-col gap-8 bg-[#F2F0F1]">
        <Container classname="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 my-auto px-4">
            <h1 className="font-integral-bold  text-[36px] lg:text-6xl font-bold max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <h2 className="max-w-[577px] text-sm md:text-base text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </h2>
            <Button className="rounded-3xl w-full md:max-w-[210px] h-12">
              Shop Now
            </Button>
            <section className="flex flex-wrap p-4 items-center justify-center md:justify-start">
              <div className="flex flex-col px-2 border-r">
                <span className="text-2xl md:text-[40px] font-semibold">
                  200+{' '}
                </span>
                <span className="text-xs text-gray-600 md:text-base whitespace-nowrap">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col px-2 md:border-r">
                <span className="text-2xl md:text-[40px] font-semibold">
                  2,000+
                </span>
                <span className="text-xs text-gray-600 md:text-base whitespace-nowrap">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col px-2">
                <span className="text-2xl md:text-[40px] font-semibold">
                  30,000+
                </span>
                <span className="text-xs text-gray-600 md:text-base whitespace-nowrap">
                  Happy Customers
                </span>
              </div>
            </section>
          </div>
          <div className="w-full md:w-auto mt-auto  relative">
            <img src={bgMain} alt="" className="object-cover" />
          </div>
        </Container>
      </div>

      <div className="bg-black flex justify-around py-10 items-center gap-4 flex-wrap">
        <img src={versace} alt="versace" />
        <img src={zara} alt="zara" />
        <img src={gucci} alt="gucci" />
        <img src={prada} alt="prada" />
        <img src={calvin} alt="calvin" />
      </div>

      <ClothingList title="NEW ARRIVALS" items={clothingItems} />
      <Separator className="my-20 container mx-auto" />
      <ClothingList title="top selling" items={clothingItems} />

      <Container classname="my-10 bg-[#F2F0F1] rounded-3xl p-6 flex flex-col gap-8">
        <h1 className="leading-8 text-center text-[32px] px-4 sm:text-5xl font-integral-bold ">
          BROWSE BY dress STYLE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="max-h-[190px] cursor-pointer overflow-hidden rounded-2xl bg-white relative">
            <span className="font-bold absolute top-5 left-5">Casual</span>
            <img
              src={category1}
              alt=""
              className="w-full h-full lg:object-right lg:object-contain"
            />
          </div>
          <div className="col-span-2 max-h-[190px] cursor-pointer overflow-hidden rounded-2xl bg-white relative">
            <span className="font-bold absolute top-5 left-5">Formal</span>
            <img
              src={category2}
              alt=""
              className="w-full h-full lg:object-contain ml-auto"
            />
          </div>
          <div className="col-span-2 max-h-[190px] cursor-pointer overflow-hidden rounded-2xl bg-white relative">
            <span className="font-bold absolute top-5 left-5">Party</span>
            <img
              src={category3}
              alt=""
              className="w-full h-full lg:object-contain ml-auto"
            />
          </div>
          <div className="max-h-[190px] cursor-pointer overflow-hidden rounded-2xl bg-white relative">
            <span className="font-bold absolute top-5 left-5">Gym</span>
            <img
              src={category4}
              alt=""
              className="w-full h-full lg:object-right lg:object-contain"
            />
          </div>
        </div>
      </Container>

      <div className="container mx-auto flex items-center justify-between my-10">
        <h1 className="text-[32px] md:text-5xl font-integral-bold">
          OUR HAPPY CUSTOMERS
        </h1>
        <span className="flex">
          <button className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full">
            <MoveLeft className="hover:scale-110 transition-all" />
          </button>
          <button className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full">
            <MoveRight className="hover:scale-110 transition-all" />
          </button>
        </span>
      </div>

      <div className="relative overflow-hidden my-10">
        <div className="hidden md:flex pointer-events-none absolute left-0 top-0 h-full w-42 z-10 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-[2px]" />
        <div className="hidden md:flex pointer-events-none absolute right-0 top-0 h-full w-42 z-10 bg-gradient-to-l from-white/80 to-transparent backdrop-blur-[2px]" />

        <div
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="border p-8 flex-shrink-0 flex flex-col gap-4 w-[350px] md:w-[400px] rounded-3xl bg-white"
            >
              <span className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>

              <h1 className="text-2xl font-bold">
                Sarah M. <Check />
              </h1>

              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
