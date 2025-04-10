import { iProduct } from '@/interfaces/iProduct'

export async function getById(id: number): Promise<iProduct> {
  const req = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json(),
  )

  return req
}
