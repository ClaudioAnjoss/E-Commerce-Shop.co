export interface iCartItem {
  id: number
  name: string
  price: number
  quantity: number
  thumbnail: string
  stock: number
  discountPercentage?: number
  brand?: string
  sku?: string
  description?: string
  minimumOrderQuantity?: number
  weight?: number
  shippingInformation?: string
  barcode?: string
  qrCode?: string
  subtotal?: number
}

export interface iCartState {
  items: iCartItem[]
  totalQuantity: number
  totalDiscount: number
  totalAmount: number
}
