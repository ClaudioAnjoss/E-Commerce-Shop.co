import { useState } from 'react'
import { Input } from './ui/shadcn/input'

interface iCount {
  quantity?: number
}

export default function Count({ quantity }: iCount) {
  const [quantityInput, setQuantityInput] = useState(quantity)

  return (
    <div className="bg-[#F0EEED] flex items-center border rounded-3xl overflow-hidden">
      <button
        className="px-5 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white text-lg font-bold"
        onClick={() => setQuantityInput((prev) => Math.max(1, prev - 1))}
      >
        -
      </button>
      <Input
        className="px-4 text-center w-16"
        type="number"
        min={1}
        value={quantityInput}
        onChange={(e) => setQuantityInput(Number(e.target.value))}
      />
      <button
        className="px-5 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-lg font-bold"
        onClick={() => setQuantityInput((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  )
}
