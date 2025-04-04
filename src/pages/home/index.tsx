import { Button } from '@/components/ui/shadcn/button'
import Container from '@/components/container'

import bgMain from '@/assets/bg-home-main.png'
import versace from '@/assets/brands/versace.png'
import zara from '@/assets/brands/zara.png'
import gucci from '@/assets/brands/gucci.png'
import prada from '@/assets/brands/prada.png'
import calvin from '@/assets/brands/calvin-klein.png'

export default function Home() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="flex flex-col gap-8">
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
    </section>
  )
}
