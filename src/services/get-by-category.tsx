import { iProduct } from '@/interfaces/iProduct'

export async function getByCategory(category: string): Promise<iProduct> {
  const req = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  ).then((res) => res.json())

  return req.products
}
