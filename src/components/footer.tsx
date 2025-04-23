import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Container from './container'
import { Input } from './ui/shadcn/input'
import { Button } from './ui/shadcn/button'
import links from '@/database/links-footer.json'
import { Separator } from './ui/shadcn/separator'

import logo from '@/assets/SHOP.CO.png'
import flagCard from '@/assets/flag-card.png'

export default function Footer() {
  return (
    <section className="bg-gray-200 relative px-4 mt-6">
      <Container>
        <div className="gap-4 bg-black text-secondary p-6 rounded-3xl my-[-30px] mb-[30px] flex items-center justify-between flex-wrap">
          <h1 className="max-w-[500px] text-lg text-center md:text-start md:text-4xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <form className="w-full">
            <Input
              placeholder="Enter your email address"
              icon={Mail}
              className="rounded-4xl bg-white text-primary"
            />
            <Button
              className="rounded-4xl bg-white text-primary w-full mt-4 font-bold cursor-pointer"
              variant={'ghost'}
            >
              Subscribe to Newsletter
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className=" col-span-2 md:col-span-1 max-w-[300px]">
            <img
              src={logo}
              alt="SHOP.CO"
              className="w-full max-w-[170px] object-contain"
            />
            <p className="text-xs max-w-3xs">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-4 p-2 ">
              <Twitter />
              <Facebook />
              <Instagram />
              <Github />
            </div>
          </div>

          {links.map(({ category, content }) => (
            <div key={category}>
              <h1 className="mb-2 font-semibold">{category.toUpperCase()}</h1>
              {content.map((data) => (
                <div
                  key={data}
                  className="text-gray-500 whitespace-nowrap text-sm"
                >
                  {data}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Separator className=" bg-gray-300 my-4" />

        <div className="flex items-center justify-center sm:justify-between text-gray-500 text-sm flex-wrap">
          <span>Claudio Anjos © 2025, All Rights Reserved</span>
          <img src={flagCard} alt="Flag cards" />
        </div>
      </Container>
    </section>
  )
}
