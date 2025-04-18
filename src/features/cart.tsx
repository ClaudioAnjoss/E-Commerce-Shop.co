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
      const addedAmount = newItem.price * newItem.quantity

      if (existingItem) {
        existingItem.quantity += newItem.quantity
        existingItem.subtotal = existingItem.price * existingItem.quantity
        state.totalAmount += addedAmount
        state.totalDiscount += existingItem.discountSubtotal
      } else {
        state.items.push({
          ...newItem,
          subtotal: addedAmount,
        })

        state.totalQuantity += newItem.quantity
        state.totalAmount += addedAmount
        state.totalDiscount += newItem.discountSubtotal
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload
      const itemToRemove = state.items.find((item) => item.id === id)

      if (!itemToRemove) return

      state.totalQuantity -= itemToRemove.quantity
      state.totalAmount -= itemToRemove.price * itemToRemove.quantity

      state.items = state.items.filter((item) => item.id !== action.payload)
      state.totalDiscount -=
        itemToRemove.quantity * itemToRemove.discountSubtotal
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const itemToChange = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (!itemToChange) return

      itemToChange.subtotal = action.payload.quantity * itemToChange.price
      state.totalQuantity -= itemToChange.quantity
      state.totalAmount -= itemToChange.price * itemToChange.quantity

      itemToChange.quantity = action.payload.quantity

      state.totalQuantity += itemToChange.quantity
      state.totalAmount += itemToChange.price * itemToChange.quantity
      // state.totalDiscount +=
      //   itemToChange.discountSubtotal * itemToChange.quantity
    },
    setCartStorage(state, action: PayloadAction<iCartState>) {
      return action.payload
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, setCartStorage } =
  cartSlice.actions
export default cartSlice.reducer
