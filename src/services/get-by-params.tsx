import { iCategory } from '@/interfaces/iCategory'
import { iProduct } from '@/interfaces/iProduct'

export async function getByParams(
  params: string,
): Promise<iProduct | iProduct[] | iCategory> {
  try {
    if (params) {
      const url = `https://dummyjson.com/products/${params === 'allProducts' ? '' : params}`

      console.log(url)

      const res = await fetch(url)

      const data = await res.json()

      if (data.products) {
        return data as iCategory
      } else if (Array.isArray(data)) {
        return data as iProduct[]
      } else {
        return data as iProduct
      }
    }
    console.warn('Parâmetro não fornecido para getByParams.')
    return []
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return []
  }
}
