import axios from 'axios'
const baseUrl = 'http://localhost:3006/api/products'

export const getAllProducts = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

export const createProduct = async (newProduct) => {
  const { data } = await axios.post(baseUrl, newProduct)
  return data
}

export const updateProduct = async (id, product) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, product)
  return data
}

export const deleteProduct = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}
