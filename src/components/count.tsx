import { useEffect, useState } from 'react'
import { Input } from './ui/shadcn/input'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '@/features/cart'

interface iCount {
  id: number
  stock: number
  quantity: number
}

export default function Count({ quantity, stock, id }: iCount) {
  const [quantityInput, setQuantityInput] = useState(quantity)
  const dispatch = useDispatch()

  console.log('id: ', id)
  console.log('quantity: ', quantity)

  useEffect(() => {
    dispatch(updateQuantity({ id, quantity: quantityInput }))
  }, [dispatch, id, quantityInput])

  return (
    <div className="max-h-8  bg-[#F0EEED] flex items-center border rounded-3xl overflow-hidden">
      <button
        className="px-5 py-1 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white text-lg font-bold"
        onClick={() => {
          if (Number(quantityInput) < 1) setQuantityInput(1)
          if (Number(quantityInput) > Number(stock)) setQuantityInput(stock)
          setQuantityInput((prev = 1) => Math.max(1, prev - 1))
        }}
      >
        -
      </button>
      <Input
        className="px-1 text-center max-w-9 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        min={0}
        max={stock}
        value={quantityInput}
        onChange={(e) => {
          let value = Number(e.target.value)
          if (value < 1) value = 1
          if (value > Number(stock)) value = Number(stock)
          setQuantityInput(value)
        }}
      />
      <button
        className="px-5 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-lg font-bold"
        onClick={() => {
          if (Number(quantityInput) < 1) setQuantityInput(1)
          if (Number(quantityInput) >= Number(stock)) setQuantityInput(stock)
          setQuantityInput((prev = 1) => prev + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
