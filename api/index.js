require('dotenv').config()
require('./mongo')
const express = require('express')
const app = express()
const cors = require('cors')
const {
  getAllProductsRouter,
  getProductRouter,
  createProductRouter,
  updateProductRouter,
  deleteProductRouter
} = require('./controllers/products')
const notFound = require('./middleware/notFound')

app.use(cors())
app.use(express.json())

app.use(getAllProductsRouter)
app.use(getProductRouter)
app.use(createProductRouter)
app.use(updateProductRouter)
app.use(deleteProductRouter)

app.use(notFound)
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = { server, app }
