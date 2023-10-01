const Comment = require('../models/comment')

const checkComment = async (req, res) => {
  const { commentId } = req.body
  try {
    const existingComment = await Comment.findOne({ commentId })
    console.log(existingComment)
    if (existingComment) {
      res.status(200).json({ commentId })
    } else {
      res.status(400).json({ error: 'Комментария нет в наличии' })
    }
  } catch (error) {
    console.error('Ошибка при проверке комментария:', error)
    res.status(500).json({ error: 'Ошибка при проверке комментария.' })
  }
}

module.exports = checkComment
