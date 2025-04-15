import { categories } from '@/database/categories'
import { iProduct } from '@/interfaces/iProduct'

export default async function getAllBrands() {
  const brandsOptions: string[] = []

  for (const category of categories) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    )
    const data = await res.json()

    if (data && data.products) {
      data.products.forEach(({ brand }: iProduct) => {
        if (brand && !brandsOptions.find((item) => item === brand))
          brandsOptions.push(brand)
      })
    } else {
      console.error('Erro ao buscar tags:', data)
    }
  }

  return brandsOptions
}
