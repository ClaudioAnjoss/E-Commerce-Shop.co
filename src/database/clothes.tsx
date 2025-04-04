export interface iClothingItem {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  colors: string[]
  sizes: string[]
}

export const clothingItems: iClothingItem[] = [
  {
    id: 1,
    name: 'Casual Shirt',
    description: 'A comfortable casual shirt for everyday wear.',
    price: 29.99,
    imageUrl: '/images/camisa-preta.png',
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Formal Suit',
    description: 'A stylish formal suit for special occasions.',
    price: 199.99,
    imageUrl: '/images/camisa-preta.png',
    colors: ['Black', 'Navy'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'Summer Dress',
    description: 'A light and breezy summer dress.',
    price: 49.99,
    imageUrl: '/images/camisa-preta.png',
    colors: ['Yellow', 'Pink'],
    sizes: ['S', 'M', 'L'],
  },
]
