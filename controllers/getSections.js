const Section = require('../models/section')

const getSections = async (req, res) => {
  const userId = req.session.userId

  try {
    const sections = await Section.find({ userId })
    console.log('Sections:', sections)
    res.status(200).json({ sections })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = getSections
