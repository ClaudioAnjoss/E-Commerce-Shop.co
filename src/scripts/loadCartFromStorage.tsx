import { iCartState } from '@/interfaces/iCartState'

export function loadCart(): iCartState {
  try {
    const data = localStorage.getItem('cart')
    const parsed = data ? JSON.parse(data) : null

    return (
      parsed ?? {
        items: [],
        totalQuantity: 0,
        totalDiscount: 0,
        totalAmount: 0,
      }
    )
  } catch (error) {
    console.error(error)
    return {
      items: [],
      totalQuantity: 0,
      totalDiscount: 0,
      totalAmount: 0,
    }
  }
}

export function saveCart(cart: iCartState) {
  try {
    localStorage.setItem('cart', JSON.stringify(cart))
  } catch (error) {
    console.error('Erro ao salvar o carrinho', error)
  }
}
