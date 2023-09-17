const Section = require('../models/section')

const deleteSection = async (req, res) => {
  const sectionId = req.params.sectionId

  try {
    const deletedSection = await Section.findByIdAndRemove(sectionId)

    if (!deletedSection) {
      return res.status(404).json({ message: 'Секция не найдена' })
    }

    res.status(200).json({ message: 'Секция успешно удалена' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = deleteSection
