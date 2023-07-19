import { useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../store/cartProducts/slice'

export function useProductsCart () {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addItem(product))
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product.id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return { handleAddToCart, handleClearCart, handleRemoveFromCart }
}
