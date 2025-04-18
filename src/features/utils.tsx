import { iCartItem, iCartState } from '@/interfaces/iCartState'

export function applyDiscount(state: iCartState, item: iCartItem) {
  console.log('chegando aqui')
  if (item.discountPercentage) {
    state.totalDiscount =
      (item.price * item.quantity * item.discountPercentage) / 100
  }
}

// export function applyDiscount(state: iCartState, item: iCartItem) {
//   console.log('chegando aqui', { item, state })

//   if (item.discountPercentage) {
//     const discountAmount =
//       (item.price * item.quantity * item.discountPercentage) / 100
//     console.log('Desconto calculado:', discountAmount)
//     state.totalDiscount += discountAmount
//   }
// }

export function removeDiscount(state: iCartState, item: iCartItem) {
  if (item.discountPercentage) {
    state.totalDiscount -=
      (item.price * item.quantity * item.discountPercentage) / 100
  }
}
