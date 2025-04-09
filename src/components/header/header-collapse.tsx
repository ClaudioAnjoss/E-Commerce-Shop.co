import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/shadcn/sheet'
import linksNavigation from '@/database/links-navigation-menu.json'
import { Link, useLocation } from 'react-router'
import logo from '@/assets/SHOP.CO.png'

export function HeaderCollapse() {
  const { pathname } = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="block md:hidden p-2 transition-transform hover:scale-110 active:scale-95">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="bg-white dark:bg-zinc-900 py-6 px-6 border-b border-zinc-200 dark:border-zinc-700 animate-in slide-in-from-top fade-in duration-300"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="/" className="mb-4">
            <img
              src={logo}
              alt="SHOP.CO"
              className="h-8 transition-opacity hover:opacity-80"
            />
          </a>

          {/* Navigation */}
          <nav className="flex flex-col items-center text-lg font-medium gap-2 w-full">
            {linksNavigation.map(({ name, href }) => {
              const isActive = pathname === href

              return (
                <Link key={name} to={href} className="w-full">
                  <span
                    className={`block w-full text-center py-2 px-4 rounded-xl transition-all duration-200 shadow-sm tracking-wide
                      ${
                        isActive
                          ? 'bg-zinc-100 dark:bg-zinc-800 font-semibold text-black dark:text-white ring-2 ring-black/10 dark:ring-white/10'
                          : 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-200 dark:active:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:shadow-md'
                      }
                    `}
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
