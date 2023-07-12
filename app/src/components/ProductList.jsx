import { Product } from './Product'
import '../styles/ProductList.css'
import { useProducts } from '../hooks/useProducts'
import { useCartContext } from '../context/CartContext'
import { CART_ACTION_TYPES } from '../reducer/cart'

export function ProductList () {
  const { dispatch } = useCartContext()
  const { products } = useProducts()

  const addProduct = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_PRODUCT, payload: product })
  }

  return (
    <main className="main-products">
      <div className="container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          )
        })}
      </div>
    </main>
  )
}
