const Section = require('../models/section')

const getSection = async (req, res) => {
  try {
    const sections = await Section.find()
    console.log('Sections:', sections)
    res.status(200).json({ sections })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = getSection
