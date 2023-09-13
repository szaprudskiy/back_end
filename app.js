const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
const router = require('./routes/index')
const Section = require('./models/section')

app.use(router)

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB подключена'))
  .catch((err) => console.error('Ошибка подключения к MongoDB:', err))

// app.get('/sectionss/:sectionId', async (req, res) => {
//   try {
//     const sectionId = req.params.sectionId
//     const section = await Section.findById(sectionId)

//     if (!section) {
//       return res.status(404).json({ message: 'Секция не найдена' })
//     }

//     res.status(200).json({ section })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Ошибка сервера' })
//   }
// })

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
