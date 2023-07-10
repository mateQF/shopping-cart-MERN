const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI
mongoose.connect(connectionString)
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log('Could not connect to database, ERROR: ' + error))

process.on('uncaughtException', (error) => {
  console.error(error)
  mongoose.disconnect()
    .then(() => console.log('Disconnected from database'))
    .catch((error) => console.log('Could not disconnect from database, ERROR: ' + error))
})
