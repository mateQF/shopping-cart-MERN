import { Product } from './Product'
import '../styles/ProductList.css'
import { useProducts } from '../hooks/useProducts'

export function ProductList () {
  const { products } = useProducts()

  return (
    <main className="main-products">
      <div className="container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          )
        })}
      </div>
    </main>
  )
}
