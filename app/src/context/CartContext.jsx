import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart";

const CartContext = createContext();

export function useCartContext() { // eslint-disable-line
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [productsCart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ productsCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
