import { useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/features/cart'

interface iCount {
  id: number
  stock: number
  quantity: number
}

export default function Count({ quantity, id }: iCount) {
  const dispatch = useDispatch()

  return (
    <div className="max-h-7 w-fit  bg-[#F0EEED] flex items-center border rounded-3xl overflow-hidden">
      <button
        className="px-5 py-1 cursor-pointer transition-all duration-500 hover:bg-red-500 hover:text-white text-lg font-bold"
        onClick={() => dispatch(decrement(id))}
      >
        -
      </button>
      <span className="px-2">{quantity}</span>
      <button
        className="px-5 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-lg font-bold"
        onClick={() => dispatch(increment(id))}
      >
        +
      </button>
    </div>
  )
}
