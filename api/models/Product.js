const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const product = model('Product', productSchema)

module.exports = product
