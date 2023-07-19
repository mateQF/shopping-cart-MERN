import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartProducts/slice'

const persistanceMiddleware = (store) => (next) => (action) => {
  next(action)
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: [persistanceMiddleware]
})
