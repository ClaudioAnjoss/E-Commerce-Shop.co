import { Link } from 'react-router'
import Container from '../container'
import linksNavigation from '@/database/links-navigation-menu.json'
import { Search, ShoppingCart } from 'lucide-react'

import logo from '@/assets/SHOP.CO.png'
import { Input } from '../ui/shadcn/input'
import { HeaderCollapse } from './header-collapse'

export default function Header() {
  return (
    <section className="bg-white h-20 shadow flex">
      <Container classname="flex items-center justify-between gap-4">
        <a href="/" className="min-w-[160px] hidden md:block">
          <img
            src={logo}
            alt="SHOP.CO"
            className="w-[160px] h-[22px] object-contain flex-shrink-0"
          />
        </a>
        <div className="hidden md:flex items-center text-base gap-4">
          {linksNavigation.map(({ name, href }) => (
            <Link key={name} to={href}>
              <button className="py-2 whitespace-nowrap ">{name}</button>
            </Link>
          ))}
        </div>

        <HeaderCollapse />

        <Input
          id="search"
          placeholder="Search for products..."
          icon={Search}
          className="rounded-4xl bg-gray-100"
        />

        <button className="transition-all duration-300 p-2 rounded-full hover:bg-secondary cursor-pointer">
          <Link to={'/cart'}>
            <ShoppingCart />
          </Link>
        </button>
      </Container>
    </section>
  )
}
