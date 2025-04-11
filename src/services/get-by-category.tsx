import { iProduct } from '@/interfaces/iProduct'

export async function getByCategory(category: string): Promise<iProduct[]> {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?delay=1000`,
    )
    const data = await res.json()
    return data.products
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return []
  }
}
