const Section = require('../models/section')

// Создать новый раздел
const createSection = async (req, res) => {
  try {
    const { title, fieldF, fieldS } = req.body
    const userId = req.session.userId

    const newSection = new Section({
      title,
      fieldF,
      fieldS,
      userId,
    })

    await newSection.save()

    res.status(201).json({ section: newSection })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = createSection
