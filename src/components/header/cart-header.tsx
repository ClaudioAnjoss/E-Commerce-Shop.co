import { Link } from 'react-router'

import { ShoppingCart } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/shadcn/hover-card'
import Cart from '../cart-items/cart'
import { Button } from '../ui/shadcn/button'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function CartHeader() {
  const quantityInCart = useSelector((state: RootState) => state.cart.items)
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="relative">
        <Link to={'/shop/cart'}>
          <ShoppingCart />

          {!!quantityInCart.length && (
            <span className="absolute left-[-2px] bottom-[-8px] bg-red-500 px-1 text-[10px] text-white font-bold rounded-full">
              {quantityInCart.length}
            </span>
          )}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className=" p-4 hidden md:block">
        <div className="max-h-[300px] overflow-y-auto pr-2">
          <Cart isHover />
        </div>

        <div className="mt-4">
          <Link to="/shop/cart">
            <Button className="w-full cursor-pointer">
              Ver carrinho completo
            </Button>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
