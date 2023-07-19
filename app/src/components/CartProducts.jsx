import { useTotalCart } from '../hooks/useTotalCart'
import '../styles/CartProducts.css'
import { useProductsCart } from '../hooks/useProductsCart'

export function CartProducts ({ productsCart }) {
  const { total } = useTotalCart(productsCart)
  const { handleClearCart, handleRemoveFromCart } = useProductsCart()

  const onDeleteProduct = (product) => {
    handleRemoveFromCart(product)
  }

  const onCleanCart = () => {
    handleClearCart()
  }

  return (
    <>
    {
      productsCart.length
        ? (
          <>
            <div className="row-product">
              {productsCart.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">
                      {product.quantity}
                    </span>
                    <p className="titulo-producto-carrito">{product.description}</p>
                    <span className="precio-producto-carrito">${product.price}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-close"
                    onClick={() => onDeleteProduct(product)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total:</h3>
              <span className="total-pagar">${total}</span>
            </div>
            <button className="btn-clear-all" onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
          )
        : <p className="cart-empty">El carrito está vacío</p>
    }
    </>
  )
}
