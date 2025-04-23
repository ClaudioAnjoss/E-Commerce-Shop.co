import { Link, useLocation } from 'react-router'
import Container from '../container'
import linksNavigation from '@/database/links-navigation-menu.json'
import logo from '@/assets/SHOP.CO.png'
import { HeaderCollapse } from './header-collapse'
import CartHeader from './cart-header'
import InputHeader from './input-header'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white border-b border-zinc-200 dark:border-zinc-800 h-20 flex items-center shadow-sm">
      <Container classname="flex items-center justify-between gap-4 px-4">
        <a href="/" className="min-w-[160px] hidden md:block">
          <img
            src={logo}
            alt="SHOP.CO"
            className="w-[160px] h-[22px] object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-4 ml-auto text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {linksNavigation.map(({ name, href }) => {
            const isActive = pathname === href

            return (
              <Link key={name} to={href}>
                <span
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {name}
                </span>
              </Link>
            )
          })}
        </nav>

        <HeaderCollapse />

        <InputHeader />

        <CartHeader />
      </Container>
    </header>
  )
}
