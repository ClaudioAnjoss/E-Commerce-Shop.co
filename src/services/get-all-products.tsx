import { categories } from '@/database/categories'

export async function getAllProducts() {
  const allClothes = []
  let totalProducts = 0

  for (const category of categories) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    )
    const data = await res.json()

    if (data && data.products) {
      allClothes.push(...data.products)
      totalProducts += data.products.length
    } else {
      console.error('Erro ao buscar produtos:', data)
    }
  }

  return {
    products: allClothes,
    total: totalProducts,
  }
}
