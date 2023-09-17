const Section = require('../models/section')

// Создать новый раздел
const createSection = async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    const newSection = await new Section(data)
    await newSection.save()
    res.status(201).json({ section: newSection })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = createSection
