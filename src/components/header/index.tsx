import { Link, useLocation } from 'react-router'
import Container from '../container'
import linksNavigation from '@/database/links-navigation-menu.json'
import { Search } from 'lucide-react'

import logo from '@/assets/SHOP.CO.png'
import { Input } from '../ui/shadcn/input'
import { HeaderCollapse } from './header-collapse'
import CartHeader from './cart-header'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white border-b border-zinc-200 dark:border-zinc-800 h-20 flex items-center shadow-sm">
      <Container classname="flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="min-w-[160px] hidden md:block">
          <img
            src={logo}
            alt="SHOP.CO"
            className="w-[160px] h-[22px] object-contain"
          />
        </a>

        {/* Navegação Desktop */}
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

        {/* Menu Mobile */}
        <HeaderCollapse />

        {/* Input de Busca */}
        <div className="flex-grow max-w-sm hidden sm:flex">
          <Input
            id="search"
            placeholder="Buscar produtos..."
            icon={Search}
            className="rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white placeholder:text-zinc-500"
          />
        </div>

        {/* Carrinho */}
        <CartHeader />
      </Container>
    </header>
  )
}

// import { Link } from 'react-router'
// import Container from '../container'
// import linksNavigation from '@/database/links-navigation-menu.json'
// import { Search } from 'lucide-react'

// import logo from '@/assets/SHOP.CO.png'
// import { Input } from '../ui/shadcn/input'
// import { HeaderCollapse } from './header-collapse'
// import CartHeader from './cart-header'

// export default function Header() {
//   return (
//     <section className="bg-white h-20 shadow flex">
//       <Container classname="flex items-center justify-between gap-4">
//         <a href="/" className="min-w-[160px] hidden md:block">
//           <img
//             src={logo}
//             alt="SHOP.CO"
//             className="w-[160px] h-[22px] object-contain flex-shrink-0"
//           />
//         </a>
//         <div className="hidden md:flex items-center text-base gap-4">
//           {linksNavigation.map(({ name, href }) => (
//             <Link key={name} to={href}>
//               <button className="py-2 whitespace-nowrap ">{name}</button>
//             </Link>
//           ))}
//         </div>

//         <HeaderCollapse />

//         <Input
//           id="search"
//           placeholder="Search for products..."
//           icon={Search}
//           className="rounded-4xl bg-gray-100"
//         />

//         <CartHeader />
//       </Container>
//     </section>
//   )
// }
