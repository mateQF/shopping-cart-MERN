import { useEffect, useState } from 'react'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct
} from '../services/products'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products)
    })
  }, [])

  const add = (product) => {
    createProduct(product).then((newProduct) =>
      setProducts((prevProducts) => [...prevProducts, newProduct])
    )
  }

  const update = (id, updatedProduct) => {
    updateProduct(id, updatedProduct).then((returnedProduct) =>
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id !== id ? product : returnedProduct
        )
      )
    )
  }

  const remove = (id) => {
    deleteProduct(id).then(() =>
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      )
    )
  }

  return { products, add, update, remove, setProducts }
}

/*
export const useUser = () => {
  const disptach = useAppDispatch()

  const removeUser = (id: UserId) => {
    disptach(deleteUserById(id))
  }

  const addNewUser = ({ name, email, github }: User) => {
    disptach(addUser({ name, email, github }))
  }

  const rollbackDeleteUser = (user: UserWithId) => {
    disptach(rollbackUser(user))
  }

  return { removeUser, addNewUser, rollbackDeleteUser }
}
*/
