import { categories } from '@/database/categories'
import { iProduct } from '@/interfaces/iProduct'

export default async function getAllTags() {
  const tagsOptions: string[] = []

  for (const category of categories) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    )
    const data = await res.json()

    if (data && data.products) {
      data.products.forEach(({ tags }: iProduct) => {
        if (!tagsOptions.find((item) => item === tags[0]))
          tagsOptions.push(tags[0])
      })
    } else {
      console.error('Erro ao buscar tags:', data)
    }
  }

  return tagsOptions
}
