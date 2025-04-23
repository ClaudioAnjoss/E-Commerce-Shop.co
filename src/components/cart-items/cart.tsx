import Count from '../count'
import { Trash } from 'lucide-react'
import { Separator } from '../ui/shadcn/separator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { removeFromCart } from '@/store/features/cart'
import { Link } from 'react-router'

interface iCart {
  isHover?: boolean
}

export default function Cart({ isHover }: iCart) {
  const { items, totalQuantity } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  return (
    <div
      className={`min-w-fit flex flex-col ${!isHover && 'border'} rounded-4xl p-4 gap-4`}
    >
      {totalQuantity < 1 && (
        <div className="flex flex-col items-center justify-center py-16 gap-4 text-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-zinc-300 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-4a2 2 0 11-4 0"
            />
          </svg>
          <div className="text-lg font-medium text-zinc-600">
            Seu carrinho está vazio
          </div>
          <p className="text-sm text-zinc-400">
            Explore os produtos e adicione algo que goste
          </p>
        </div>
      )}

      {items &&
        items.map((item) => (
          <div key={item.id}>
            <div className="flex items-center gap-2">
              <div className="min-w-[100px] h-[100px] rounded-3xl overflow-hidden">
                <Link to={`/shop/${item.id}/${item.name}`}>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              <div className="flex flex-col w-full gap-3 min-w-[250px]">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-base font-semibold text-zinc-800 leading-tight line-clamp-1">
                    {item.name}
                  </h1>
                  <button
                    className="border-none hover:bg-red-50 p-1 rounded-full cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash className="text-red-500" size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-600 grid gap-1">
                    <span>In stock: {item.stock}</span>
                    <span className="flex flex-nowrap whitespace-nowrap text-sm text-zinc-600">
                      Discount applied:&nbsp;
                      <strong className="text-red-500 font-semibold whitespace-nowrap">
                        -{item.discountPercentage}%
                      </strong>
                    </span>

                    {!isHover && (
                      <Count
                        id={item.id}
                        quantity={item.quantity}
                        stock={item.stock}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-end w-full mt-auto">
                    {item.discountPercentage && (
                      <span className="text-sm text-zinc-400 ">
                        -$
                        {(
                          (item.price *
                            item.quantity *
                            item.discountPercentage) /
                          100
                        ).toFixed(2)}
                      </span>
                    )}
                    <span className="text-xl font-bold text-zinc-800">
                      ${(item.subtotal - item.discountSubtotal).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
    </div>
  )
}
