import { getByParams } from '@/services/get-by-params'
import { useQuery } from '@tanstack/react-query'

export default function ServicePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['produtos'],
    queryFn: () => getByParams('category/womens-bags'),
  })

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
        {isLoading && <div>Carregando</div>}
        {Array.isArray(products) &&
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
