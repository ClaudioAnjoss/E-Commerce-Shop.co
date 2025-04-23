import { useEffect, useState } from 'react'
import { Separator } from './ui/shadcn/separator'
import { iProduct } from '@/interfaces/iProduct'
import Rating from './rating'
import { Lens } from './ui/magic-ui/lens'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '@/store/features/cart'
import { RootState } from '@/store'
import { AnimatedSubscribeButton } from './ui/magic-ui/animated-button-interation'

interface iHandleQuantity {
  max: number
  quantity: number
}

export default function ProductDetails(item: iProduct) {
  const [selectedImage, setSelectedImage] = useState('')
  const [quantityCount, setQuantityCount] = useState(1)
  const dispatch = useDispatch()
  const { quantity: cartQuantity = 0 } = useSelector(
    (state: RootState) =>
      state.cart.items.find((itemInCart) => itemInCart.id === item.id) || {
        quantity: 0,
      },
  )

  function handleQuantity({ max, quantity }: iHandleQuantity) {
    if (quantity < 1) return setQuantityCount(1)
    if (quantity >= max) return setQuantityCount(max)

    setQuantityCount(quantity)
  }

  function handleSubmit() {
    if (cartQuantity && cartQuantity + quantityCount - 1 >= item.stock)
      return alert(
        `Limite de estoque atingido. Diminua a quantidade para continuar. Estoque máximo: ${item.stock} unidades.`,
      )

    if (!cartQuantity) {
      dispatch(
        addToCart({
          id: item.id,
          name: item.title,
          price: item.price,
          quantity: quantityCount,
          stock: item.stock,
          thumbnail: item.thumbnail,
          discountPercentage: item.discountPercentage,
          discountSubtotal:
            (item.price * quantityCount * item.discountPercentage) / 100,
          subtotal: item.price * quantityCount,
        }),
      )
    } else {
      dispatch(removeFromCart(item.id))
    }
  }

  useEffect(() => {
    setSelectedImage(item.images[0])
  }, [item.images])

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="col-span-full md:order-2 bg-[#F0EEED] rounded-4xl w-full h-[290px] md:h-[370px]">
          <Lens>
            <div className="bg-[#F0EEED] rounded-4xl w-full h-[290px] md:h-[370px] ">
              <img
                src={selectedImage}
                alt={'alt'}
                className="w-full h-full object-contain blur-md transition-all duration-500 ease-out"
                onLoad={(e) => e.currentTarget.classList.remove('blur-md')}
              />
              {/* <img
                src={selectedImage}
                alt={item.title}
                className="w-full h-full object-contain "
              /> */}
            </div>
          </Lens>
        </div>

        {item.images.length > 1 && (
          <div
            className="md:py-2 md:col-end-1 md:order-1 flex md:flex-col md:max-h-[370px] items-center gap-4 overflow-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {item.images.map((data, index) => (
              <span
                className={`flex-1 min-w-[110px] sm:max-w-[110px] h-[106px] md:min-h-[106px]
                 bg-[#F0EEED] rounded-4xl cursor-pointer
                ${selectedImage === data ? 'border border-black' : ''}
                `}
                key={index}
                onClick={() => setSelectedImage(data)}
              >
                <img
                  src={data}
                  alt={`Thumbnail ${data}`}
                  className="w-full h-full object-cover"
                />
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-integral-bold">{item.title}</h1>

        <Rating ratingValue={item.rating} />

        <div className="text-2xl flex items-center gap-2">
          <span className="font-semibold">${item.price} </span>
          <span className="font-semibold text-gray-400 line-through">
            {((item.price * item.discountPercentage) / 100).toFixed(2)}
          </span>
          <span className="text-red-900 text-sm bg-red-200 rounded-4xl py-1 px-2">
            -{item.discountPercentage}%
          </span>
        </div>

        <p className="text-sm">{item.description}</p>

        <Separator />

        <div className="flex items-start gap-2 text-sm text-gray-700">
          <svg
            className="w-5 h-5 text-green-500 mt-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="flex flex-col">
            <span className="font-semibold text-green-600">In stock</span>
            <span className="text-gray-500">{item.stock} units available</span>
          </div>
        </div>

        <Separator />

        <div className="flex items-center">
          <div className="font-semibold  flex items-center justify-between overflow-hidden bg-gray-100 rounded-4xl w-[110px]">
            <button
              className="transition-all duration-300 cursor-pointer p-3 hover:bg-red-400"
              onClick={() =>
                handleQuantity({
                  max: item.stock,
                  quantity: quantityCount - 1,
                })
              }
            >
              -
            </button>
            <span>{quantityCount}</span>
            <button
              className="transition-all duration-300 cursor-pointer p-3 hover:bg-green-400 "
              onClick={() =>
                handleQuantity({
                  max: item.stock,
                  quantity: quantityCount + 1,
                })
              }
            >
              +
            </button>
          </div>

          <AnimatedSubscribeButton
            subscribeStatus={!!cartQuantity}
            onClick={handleSubmit}
          >
            <span>Add to Cart</span>
            <span>Added</span>
          </AnimatedSubscribeButton>
        </div>
      </div>
    </section>
  )
}
