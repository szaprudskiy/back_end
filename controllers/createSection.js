const Section = require('../models/section')

// Создать новый раздел
const createSection = async (req, res) => {
  try {
    const { title, pageId, postId, token } = req.body
    const userId = req.session.userId

    const newSection = new Section({
      title,
      pageId,
      postId,
      token,
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
