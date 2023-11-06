const Comment = require('../models/comment')

const checkComment = async (req, res) => {
  const { commentId } = req.body

  try {
    const existingComment = await Comment.findOne({ commentId })

    if (existingComment) {
      return res.status(200).json(commentId)
    } else {
      return res.status(404).json(false)
    }
  } catch (error) {
    console.error('Ошибка при проверке наличия комментария:', error)
    res.status(500).json({ error: 'Ошибка при проверке наличия комментария' })
  }
}

module.exports = checkComment
