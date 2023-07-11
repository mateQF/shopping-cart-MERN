const { initialProducts, api, server, getAllProducts } = require('./helpers')
const Product = require('../models/Product')
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const generateObjectId = () => {
  return new ObjectId('000000000000000000000001')
}

beforeEach(async () => {
  await Product.deleteMany({})

  for (const product of initialProducts) {
    const productObjetcts = new Product(product)
    await productObjetcts.save()
  }
})

describe('get all products', () => {
  test('as json', async () => {
    await api
      .get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('there are three products', async () => {
    const { body } = await getAllProducts()
    expect(body).toHaveLength(initialProducts.length)
  })

  test('the first product is Notebook 1', async () => {
    const { body } = await getAllProducts()
    expect(body[0].description).toContain('Notebook 1')
  })
})

describe('create a product', () => {
  test('is possible with a valid model', async () => {
    const newProduct = {
      description: 'Notebook 4',
      price: 250,
      quantity: 1,
      imageUrl: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000042000/24660_1.webp'
    }

    await api
      .post('/api/products')
      .send(newProduct)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const { body } = await getAllProducts()

    expect(body).toHaveLength(initialProducts.length + 1)
    expect(body[initialProducts.length].description).toContain(newProduct.description)
  })

  test('is not possible without description', async () => {
    const newProduct = {
      price: 220,
      imageUrl: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000042000/24660_1.webp',
      quantity: 1
    }

    await api
      .post('/api/products')
      .send(newProduct)
      .expect(400)

    const { body } = await getAllProducts()
    expect(body).toHaveLength(initialProducts.length)
  })
})

describe('delete a product', () => {
  test('is possible with a valid model', async () => {
    const { body: products } = await getAllProducts()
    const productToDelete = products[0]

    await api
      .delete(`/api/products/${productToDelete.id}`)
      .expect(204)

    const { body: secondResponse } = await getAllProducts()
    expect(secondResponse).toHaveLength(initialProducts.length - 1)

    expect(secondResponse).not.toContain(productToDelete.description)
  })

  test('is not possible if it does not exist', async () => {
    const id = generateObjectId()
    await api
      .delete(`/api/products/${id}`)
      .expect(404)

    const { body } = await getAllProducts()
    expect(body).toHaveLength(body.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
  mongoose.disconnect()
  server.close()
})
