import Container from '@/components/container'
import AnimatedContent from '@/components/ui/react-bits/animated-content'
import { Button } from '@/components/ui/shadcn/button'

import bgMain from '@/assets/bg-home-main.png'

export default function BannerHome() {
  return (
    <div className="bg-[#F2F0F1] px-4 ">
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <Container classname="grid md:grid-cols-2 pb-0">
          <div className="gap-4 grid">
            <h1 className="font-integral-bold  text-[36px] lg:text-6xl font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <h2 className="text-sm md:text-base text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </h2>
            <Button className="rounded-3xl w-full md:max-w-[210px] py-6">
              Shop Now
            </Button>

            <ul className="grid grid-cols-2 md:grid-cols-3">
              <li className="flex flex-col items-center md:items-start">
                <strong className="text-2xl md:text-[40px] font-semibold">
                  200+
                </strong>{' '}
                International Brands
              </li>
              <li className="flex flex-col items-center md:items-start">
                <strong className="text-2xl md:text-[40px] font-semibold">
                  200+
                </strong>{' '}
                International Brands
              </li>
              <li className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
                <strong className="text-2xl md:text-[40px] font-semibold">
                  200+
                </strong>{' '}
                International Brands
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto mt-auto  relative">
            <img src={bgMain} alt="" className="object-cover" />
          </div>
        </Container>
      </AnimatedContent>
    </div>
  )
}
