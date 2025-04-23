import { useState } from 'react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '../ui/shadcn/sheet'
import linksNavigation from '@/database/links-navigation-menu.json'
import { Link, useLocation } from 'react-router'
import logo from '@/assets/SHOP.CO.png'

export function HeaderCollapse() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block md:hidden  transition-transform hover:scale-110 active:scale-95">
        <Menu size={28} />
      </SheetTrigger>

      <SheetContent
        side="top"
        className="bg-white dark:bg-zinc-900 py-4 px-6 border-b border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg animate-in slide-in-from-top fade-in duration-300"
      >
        <div className="flex flex-col items-center gap-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <a href="/" className="mb-2 transition-transform hover:scale-105">
            <img src={logo} alt="SHOP.CO" className="h-10" />
          </a>

          <nav className="flex flex-col items-center text-lg font-semibold gap-2 w-full">
            {linksNavigation.map(({ name, href }) => {
              const isActive = pathname === href

              return (
                <Link
                  key={name}
                  to={href}
                  className="w-full"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span
                    className={`block w-full text-center py-2 px-4 rounded-md transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? 'bg-black text-white shadow-lg ring-2 ring-black/10'
                          : 'bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600 text-black dark:text-white hover:shadow-md hover:text-black'
                      }`}
                  >
                    {name}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
