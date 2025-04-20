import { RootState } from '@/store'
import { BadgePercent, MoveRight } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/shadcn/button'
import { Input } from '../ui/shadcn/input'
import { Separator } from '../ui/shadcn/separator'

export default function OrderCart() {
  const { totalAmount, totalDiscount } = useSelector(
    (state: RootState) => state.cart,
  )

  return (
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
  )
}
