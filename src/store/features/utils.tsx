import { iCartItem, iCartState } from '@/interfaces/iCartState'
import { toast } from 'sonner'

interface iFeedbackSuccess {
  method: string
  item?: iCartItem
}

export function recalculateCartTotals(state: iCartState) {
  state.totalQuantity = state.items.reduce((acc, cur) => acc + cur.quantity, 0)
  state.totalAmount = state.items.reduce(
    (acc, cur) => acc + (cur.subtotal - cur.discountSubtotal),
    0,
  )
  state.totalDiscount = state.items.reduce(
    (acc, cur) => acc + cur.discountSubtotal,
    0,
  )
}

export function feedbackSuccess({ method, item }: iFeedbackSuccess) {
  if (method === 'add' && item)
    toast(
      <div className="flex items-center p-4    max-w-sm w-full ">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
          <p className="text-sm text-gray-600">
            Subtotal: R${item.subtotal.toFixed(2)}
          </p>

          {/* Exibindo desconto, se houver */}
          {item.discountPercentage && (
            <p className="text-sm text-green-500">
              Desconto: {item.discountPercentage}%
            </p>
          )}

          {/* Aviso de estoque, se o item estiver fora de estoque */}
          {item.stock === 0 && (
            <p className="text-sm text-red-500 mt-2">
              Este item está fora de estoque.
            </p>
          )}
        </div>
      </div>,
    )
}
