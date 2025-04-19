import { iCartItem, iCartState } from '@/interfaces/iCartState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { feedbackSuccess, recalculateCartTotals } from './utils'

const initialState: iCartState = {
  items: [],
  totalQuantity: 0,
  totalDiscount: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<iCartItem>) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += newItem.quantity

        existingItem.subtotal = existingItem.quantity * existingItem.price

        existingItem.discountSubtotal = existingItem.discountPercentage
          ? (existingItem.subtotal * existingItem.discountPercentage) / 100
          : 0
      } else {
        const subtotal = newItem.quantity * newItem.price

        const discountSubtotal = newItem.discountPercentage
          ? (subtotal * newItem.discountPercentage) / 100
          : 0

        state.items.push({
          ...newItem,
          subtotal,
          discountSubtotal,
        })
      }

      recalculateCartTotals(state)
      feedbackSuccess({ method: 'add', item: newItem || existingItem })
    },
    increment(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (!item || item.quantity >= item.stock) return

      item.quantity += 1

      item.subtotal = item.quantity * item.price

      item.discountSubtotal = item.discountPercentage
        ? (item.subtotal * item.discountPercentage) / 100
        : 0

      recalculateCartTotals(state)
    },
    decrement(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (!item || item.quantity <= 1) return

      item.quantity -= 1

      item.subtotal = item.quantity * item.price

      item.discountSubtotal = item.discountPercentage
        ? (item.subtotal * item.discountPercentage) / 100
        : 0

      recalculateCartTotals(state)
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload
      const itemToRemove = state.items.find((item) => item.id === id)

      if (!itemToRemove) return

      state.items = state.items.filter((item) => item.id !== id)

      recalculateCartTotals(state)
    },
    setCartStorage(_, action: PayloadAction<iCartState>) {
      return action.payload
    },
  },
})

export const {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  setCartStorage,
} = cartSlice.actions
export default cartSlice.reducer
