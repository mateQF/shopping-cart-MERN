import '../styles/Product.css'
import { useProductsCart } from '../hooks/useProductsCart'
import { toast } from 'sonner'

export function Product ({ product }) {
  const { handleAddToCart } = useProductsCart()

  const addProduct = (product) => {
    handleAddToCart(product)
  }

  return (
    <div className="product-container">
      <figure className="image-container">
        <img src={`${product.imageUrl}`} alt={`${product.description}`} />
      </figure>
      <div className="description-container">
        <h2>{product.description}</h2>
        <h2>${product.price}.99</h2>
      </div>
      <div className="btn-container">
        <button className="btn-add" onClick={() => {
          addProduct(product)
          toast.success(`${product.description} has been added to the cart`)
        }}>
          Add to Cart
          <span className="material-symbols-outlined icon-link-card">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  )
}
