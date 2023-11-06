const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const router = require('./routes/index')

const app = express()
app.use(express.json())

app.use(
  cors({
    origin: 'https://panel.stat-gurteam.info',
    credentials: true,
  })
)
mongoose
  .connect(
    'mongodb+srv://sergeizaprudskiy:JIBXmXtLCOWMzaiO@cluster0.gev2o4t.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('MongoDB подключена')
  })
  .catch((err) => {
    console.error('Ошибка подключения к MongoDB:', err)
  })

const store = new MongoDBStore({
  uri: 'mongodb+srv://sergeizaprudskiy:JIBXmXtLCOWMzaiO@cluster0.gev2o4t.mongodb.net/?retryWrites=true&w=majority',
  collection: 'sessions',
  client: mongoose.connection,
})

app.use(
  session({
    secret: '222zxc',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
)

app.use(router)

const PORT = process.env.PORT || 4004

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
