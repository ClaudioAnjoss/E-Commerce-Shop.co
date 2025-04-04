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
    <section className="bg-gray-200 relative mt-12">
      <Container classname="flex flex-col gap-4">
        <div className="gap-4 bg-black text-secondary p-6 rounded-3xl my-[-30px] flex items-center justify-between flex-wrap">
          <h1 className="max-w-[500px] text-lg text-center md:text-start md:text-4xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <span className="w-full">
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
          </span>
        </div>

        <div className="flex justify-around md:justify-between mt-12 gap-4 flex-wrap p-4 md:p-0">
          <span className="flex flex-col gap-4 sm:max-w-[250px]">
            <img
              src={logo}
              alt="SHOP.CO"
              className="object-contain w-2xs mx-auto md:max-w-1/2 sm:mx-0 "
            />
            <p className="text-xs">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <span className="flex items-center gap-4 p-2 justify-between">
              <Twitter />
              <Facebook />
              <Instagram />
              <Github />
            </span>
          </span>

          {links.map(({ category, content }) => (
            <div
              key={category}
              className="w-1/3 md:max-w-[250px] flex flex-col gap-4 my-4 "
            >
              <h1 className="mb-2 font-semibold">{category.toUpperCase()}</h1>
              {content.map((data) => (
                <span
                  key={data}
                  className="text-gray-500 whitespace-nowrap text-sm"
                >
                  {data}
                </span>
              ))}
            </div>
          ))}
        </div>

        <Separator className=" bg-gray-300" />

        <div className="flex items-center justify-center sm:justify-between text-gray-500 text-sm flex-wrap">
          <span>Claudio Anjos © 2025, All Rights Reserved</span>
          <img src={flagCard} alt="Flag cards" />
        </div>
      </Container>
    </section>
  )
}
