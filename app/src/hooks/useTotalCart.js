import { useEffect, useState } from 'react'

export function useTotalCart (products) {
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  useEffect(() => {
    let monto = 0
    products.forEach((product) => {
      monto += product.quantity * product.price
    })
    setTotal(monto)
    setCountProducts(products.length)
  }, [products])

  return { total, countProducts }
}
