const Section = require('../models/section')

const updateSection = async (req, res) => {
  const sectionId = req.params.sectionId
  const updatedSectionData = req.body

  try {
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      updatedSectionData,
      { new: true } // Опция { new: true } возвращает обновленную версию секции
    )

    if (!updatedSection) {
      return res.status(404).json({ message: 'Секция не найдена' })
    }

    res.status(200).json({ section: updatedSection })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ошибка сервера' })
  }
}

module.exports = updateSection
