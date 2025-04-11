import { iProduct } from './iProduct'

export interface IProductResponse {
  products: iProduct[]
  limit: number
  total: number
  skip: number
}
