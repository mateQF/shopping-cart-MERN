const getProductRouter = require('express').Router()
const getAllProductsRouter = require('express').Router()
const createProductRouter = require('express').Router()
const updateProductRouter = require('express').Router()
const deleteProductRouter = require('express').Router()
const Product = require('../models/Product')

getAllProductsRouter.get('/api/products', async (_req, res) => {
  const prodcuts = await Product.find({})
  res.json(prodcuts)
})

getProductRouter.get('/api/products/:id', async (req, res) => {
  const { id } = req.params

  try {
    const productFound = await Product.findById(id)
    res.json(productFound)
  } catch (error) {
    console.error(error)
  }
})

createProductRouter.post('/api/products', async (req, res) => {
  const { description, price, imageUrl, quantity } = req.body

  if (!description || !price || !imageUrl || !quantity) {
    res.status(400).json({
      error: 'Invalid or missing description, price, imageUrl or quantity'
    })
  }

  const newProduct = new Product({
    description,
    price,
    imageUrl,
    quantity
  })

  try {
    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    console.error(error)
  }
})

updateProductRouter.put('/api/products/:id', async (req, res) => {
  const { id } = req.params
  const { description, price, imageUrl, quantity } = req.body

  const newProductInfo = {
    description,
    price,
    imageUrl,
    quantity
  }

  try {
    const product = await Product.findByIdAndUpdate(id, newProductInfo, { new: true })
    res.status(200).json(product)
  } catch (error) {
    console.error(error)
  }
})

deleteProductRouter.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndDelete(id)
  res.status(204).end()
})

module.exports = {
  getAllProductsRouter,
  getProductRouter,
  createProductRouter,
  updateProductRouter,
  deleteProductRouter
}
