const Section = require('../models/section')

const getSectionbyId = async (req, res) => {
  const sectionId = req.params.sectionId
  console.log(sectionId)

  try {
    const section = await Section.findById(sectionId)
    console.log(section)
    section
      ? res.status(200).json({ section })
      : res.status(404).json({ section })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}
module.exports = getSectionbyId
