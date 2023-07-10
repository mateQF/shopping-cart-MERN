import { useCartContext } from "../context/CartContext";
import { useCart } from "../hooks/useCart";
import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_ACTION_TYPES } from "../reducer/cart";

export function Header() {
  const { productsCart, dispatch } = useCartContext();
  const { total, countProducts } = useCart(productsCart);
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    dispatch({ type: CART_ACTION_TYPES.DELETE_PRODUCT, payload: product });
  };

  const onCleanCart = () => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });
  };

  return (
    <>
      <header className="header">
        <div className="link-container">
          <Link to="/" className="link">
            <span className="material-symbols-outlined icon">home</span>
            <p className="header-title">Home</p>
          </Link>
          <div className="link" onClick={() => setActive(!active)}>
            <div
              className={`container-cart-products ${
                active ? "" : "hidden-cart"
              }`}
            >
              {productsCart.length ? (
                <>
                  <div className="row-product">
                    {productsCart.map((product) => (
                      <div className="cart-product" key={product.id}>
                        <div className="info-cart-product">
                          <span className="cantidad-producto-carrito">
                            {product.quantity}
                          </span>
                          <p className="titulo-producto-carrito">
                            {product.description}
                          </p>
                          <span className="precio-producto-carrito">
                            ${product.price}
                          </span>
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
              ) : (
                <p className="cart-empty">El carrito está vacío</p>
              )}
            </div>
            <span className="material-symbols-outlined icon">
              shopping_cart
            </span>
            <p className="header-title">Cart ({countProducts})</p>
          </div>
        </div>
      </header>
    </>
  );
}
