const { app, server } = require('../index')
const supertest = require('supertest')
const api = supertest(app)

const initialProducts = [
  {
    description: 'Notebook 1',
    price: 400,
    quantity: 1,
    imageUrl: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000042000/24660_1.webp'
  },
  {
    description: 'Notebook 2',
    price: 300,
    quantity: 1,
    imageUrl: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000042000/24660_1.webp'
  },
  {
    description: 'Notebook 3',
    price: 200,
    quantity: 1,
    imageUrl: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000042000/24660_1.webp'
  }
]

const getAllProducts = async () => {
  const response = await api.get('/api/products')
  return response
}

module.exports = {
  initialProducts,
  api,
  server,
  getAllProducts
}
