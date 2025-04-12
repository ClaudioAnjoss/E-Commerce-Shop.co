import { iComment } from './iComment'
import { iProduct } from './iProduct'

export interface IResponse {
  comments: iComment[]
  products?: iProduct[]
  limit: number
  total: number
  skip: number
}
