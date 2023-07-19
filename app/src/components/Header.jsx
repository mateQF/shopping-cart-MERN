import { useTotalCart } from '../hooks/useTotalCart'
import '../styles/Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProducts } from './CartProducts'
import { useSelector } from 'react-redux'

export function Header () {
  const productsCart = useSelector(state => state.cart)
  const { countProducts } = useTotalCart(productsCart)
  const [active, setActive] = useState(false)
  const isSmallScreen = window.innerWidth <= 480

  const toggleCartMenu = () => {
    if (isSmallScreen) {
      setActive(!active)
    }
    setActive(!active)
  }

  return (
    <>
      <header className="header">
        <div className="link-container">
          <Link to="/" className="link">
            <span className="material-symbols-outlined icon">home</span>
            <p className="header-title">Home</p>
          </Link>
          <div className="link openCart" onClick={toggleCartMenu}>
            <span className="material-symbols-outlined icon">
              shopping_cart
            </span>
            <p className="header-title">Cart ({countProducts})</p>
          </div>
        </div>
      </header>
      {active && (
        <div className={`container-cart-products ${
          active ? '' : 'hidden-cart'
        }`}>
          <CartProducts productsCart={productsCart} />
        </div>
      )}
    </>
  )
}
