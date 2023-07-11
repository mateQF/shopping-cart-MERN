const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

mongoose.connect(connectionString)
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log('Could not connect to database, ERROR: ' + error))

process.on('uncaughtException', (error) => {
  console.error(error)
  mongoose.disconnect()
    .then(() => console.log('Disconnected from database'))
    .catch((error) => console.log('Could not disconnect from database, ERROR: ' + error))
})
