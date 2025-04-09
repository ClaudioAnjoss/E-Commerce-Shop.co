import camisa from '@/assets/clothes/camisa-preta.png'
import Count from './count'
import { BadgePercent, MoveRight, Trash } from 'lucide-react'
import { Separator } from './ui/shadcn/separator'
import { Input } from './ui/shadcn/input'
import { Button } from './ui/shadcn/button'

export default function Cart() {
  return (
    <section className="grid gap-4 md:grid-cols-[2fr_1fr] justify-center">
      <div className="flex flex-col border rounded-4xl p-4 gap-4 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <div key={index} className="flex items-center gap-2">
              <div className="min-w-[100px] h-[100px] rounded-3xl overflow-hidden">
                <img
                  src={camisa}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-full items-start justify-between">
                <div className="flex items-center justify-between w-full ">
                  <h1 className="font-semibold line-clamp-1">
                    Gradient Graphic T-shirt
                  </h1>
                  <Trash color="red" />
                </div>
                <span className="text-sm font-light">Size: Large</span>
                <span className="text-sm font-light">Color: White</span>
                <div className="flex items-center justify-between w-full mt-auto">
                  <span className="text-[20px] font-semibold">$145</span>
                  <Count />
                </div>
              </div>
            </div>
            <Separator />
          </>
        ))}
      </div>

      <div className="flex flex-col border rounded-4xl p-4 gap-4 h-fit md:w-[500px]">
        <h1 className="font-semibold text-[20px]">Order Summary</h1>
        <div className="flex items-center justify-between">
          <span className="font-light">Subtotal</span>
          <span className="font-semibold">$565</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light">Discount (-20%)</span>
          <span className="font-semibold text-red-700">-$113</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light">Delivery Fee</span>
          <span className="font-semibold">$15</span>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="font-light">Total</span>
          <span className="font-semibold">$467</span>
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
