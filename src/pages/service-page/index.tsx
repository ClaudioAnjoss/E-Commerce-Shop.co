import { useEffect, useState } from 'react'

interface IReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

interface IDimensions {
  width: number
  height: number
  depth: number
}

interface IMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

interface IFetchData {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: IDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IMeta
  images: string[]
  thumbnail: string
}

export default function ServicePage() {
  const [products, setProducts] = useState<IFetchData[]>([])

  console.log(products)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://dummyjson.com/products/category/womens-bags',
      )
      const json = await res.json()
      setProducts(json.products) // a API retorna { products: [...] }
    }
    fetchData()
  }, [])
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📦 Lista de Produtos</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
              <h2>{product.title}</h2>
              <p>
                <strong>Preço:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Categoria:</strong> {product.category}
              </p>
              <p>
                <strong>Marca:</strong> {product.brand}
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {product.rating}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}
