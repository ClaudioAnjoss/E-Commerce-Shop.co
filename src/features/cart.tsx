import { iCartItem, iCartState } from '@/interfaces/iCartState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

      const existingItem = state.items.find((Item) => Item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += newItem.quantity
        state.totalDiscount += newItem.discountPercentage
          ? ((newItem.price * newItem.discountPercentage) / 100) *
            newItem.quantity
          : 0

        state.totalAmount += existingItem.subtotal ?? 0
        existingItem.subtotal = existingItem.price * existingItem.quantity
      } else {
        state.items.push({
          ...newItem,
          subtotal: newItem.price * newItem.quantity,
        })
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload
      const itemToRemove = state.items.find((item) => item.id === id)

      if (!itemToRemove) return

      state.totalQuantity -= itemToRemove.quantity
      state.totalAmount -= itemToRemove.price * itemToRemove.quantity

      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const itemToChange = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (!itemToChange) return

      state.totalQuantity -= itemToChange.quantity
      state.totalAmount -= itemToChange.price * itemToChange.quantity

      itemToChange.quantity = action.payload.quantity

      state.totalQuantity += itemToChange.quantity
      state.totalAmount += itemToChange.price * itemToChange.quantity
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
