import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const persistedState = window.localStorage.getItem('__redux__state__')
  if (persistedState) return JSON.parse(persistedState).cart
  return []
})()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { payload } = action
      let productDuplicate
      if (payload) {
        productDuplicate = state.find(
          (product) => product.id === payload.id
        )
      }
      if (productDuplicate) {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        state.push(payload)
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      return state.filter(product => product.id !== id)
    },
    clearCart: () => {
      return []
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
