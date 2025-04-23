import { iProduct } from '@/interfaces/iProduct'
import { IResponse } from '@/interfaces/IResponse'

const URL = 'https://dummyjson.com/'
export async function getByParams(
  params: string,
): Promise<iProduct | iProduct[] | IResponse> {
  try {
    if (params) {
      const res = await fetch(`${URL}${params}`)

      const data = await res.json()

      return data
    }
    console.warn('Parâmetro não fornecido para getByParams.')
    return []
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return []
  }
}
