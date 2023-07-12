export const CART_ACTION_TYPES = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type, payload } = action
  let productDuplicate
  if (payload) {
    productDuplicate = state.find(
      (product) => product.id === payload.id
    )
  }

  switch (type) {
    case CART_ACTION_TYPES.ADD_PRODUCT:
      if (productDuplicate) {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        return [...state, payload]
      }
    case CART_ACTION_TYPES.DELETE_PRODUCT:
      return state.filter((product) => product.id !== payload.id)
    case CART_ACTION_TYPES.CLEAR_CART:
      return []
    default:
      return state
  }
}
