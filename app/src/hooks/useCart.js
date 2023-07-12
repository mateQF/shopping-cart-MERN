import { useEffect, useState } from 'react'

export function useCart (products) {
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(products.length)

  useEffect(() => {
    let monto = 0
    products.forEach((product) => {
      monto += product.quantity * product.price
    })
    setTotal(monto)
    setCountProducts(products.length)
  }, [products])

  return { total, setTotal, countProducts, setCountProducts }
}
