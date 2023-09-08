const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
const router = require('./routes/index')
app.use(router)

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB подключена'))
  .catch((err) => console.error('Ошибка подключения к MongoDB:', err))

const PORT = process.env.PORT || 4004

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
