import Count from '../count'
import { BadgePercent, MoveRight, Trash } from 'lucide-react'
import { Separator } from '../ui/shadcn/separator'
import { Input } from '../ui/shadcn/input'
import { Button } from '../ui/shadcn/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { removeFromCart } from '@/store/features/cart'

export default function CartItems() {
  const { items, totalAmount, totalQuantity, totalDiscount } = useSelector(
    (state: RootState) => state.cart,
  )
  const dispatch = useDispatch()

  console.log(items)
  return (
    <section className="grid gap-4 md:grid-cols-[2fr_1fr] justify-center">
      <div className="flex flex-col border rounded-4xl p-4 gap-4 ">
        {totalQuantity < 1 && <div>Carrinho vazio</div>}
        {items &&
          items.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-2">
                <div className="min-w-[100px] h-[100px] rounded-3xl overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
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

                      <Count
                        id={item.id}
                        quantity={item.quantity}
                        stock={item.stock}
                      />
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

      <div className="flex flex-col border rounded-4xl p-4 gap-4 h-fit md:w-[500px]">
        <h1 className="font-semibold text-[20px]">Order Summary</h1>
        <div className="flex items-center justify-between">
          <span className="font-light">Subtotal</span>
          <span className="font-semibold">
            ${totalAmount && totalAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light">
            Discount (-{totalDiscount && totalDiscount.toFixed(2)}%)
          </span>
          <span className="font-semibold text-red-700">
            -${totalDiscount.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light">Delivery Fee</span>
          <span className="font-semibold">$0</span>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="font-light">Total</span>
          <span className="font-semibold">${totalAmount.toFixed(2)}</span>
        </div>

        <form action="" className="flex gap-4">
          <Input
            className="bg-[#F0F0F0] border-none rounded-4xl py-6"
            placeholder="Add promo code"
            icon={BadgePercent}
          />
          <Button className=" border-none rounded-4xl py-6">Apply</Button>
        </form>
        <Button className=" border-none rounded-4xl py-6">
          Go to Checkout <MoveRight />
        </Button>
      </div>
    </section>
  )
}
