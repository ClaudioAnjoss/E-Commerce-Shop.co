import Count from './count'
import { BadgePercent, MoveRight, Trash } from 'lucide-react'
import { Separator } from './ui/shadcn/separator'
import { Input } from './ui/shadcn/input'
import { Button } from './ui/shadcn/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { removeFromCart } from '@/features/cart'

export default function Cart() {
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

                <div className="flex flex-col gap-2 w-full items-start justify-between">
                  <div className="flex items-center justify-between w-full ">
                    <h1 className="font-semibold line-clamp-1">{item.name}</h1>
                    <Button
                      variant={'outline'}
                      size={'icon'}
                      className="cursor-pointer border-none"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash color="red" />
                    </Button>
                  </div>
                  <span className="text-sm font-light">
                    Size: {item.weight}
                  </span>
                  <span className="text-sm font-light">Color: White</span>
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-[20px] font-semibold">
                      ${item.subtotal?.toFixed(2)}
                    </span>
                    <Count
                      id={item.id}
                      quantity={item.quantity}
                      stock={item.stock}
                    />
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
          <span className="font-semibold">
            ${(totalAmount - totalDiscount).toFixed(2)}
          </span>
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
