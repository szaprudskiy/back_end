const Comment = require('../models/comment')

const createComment = async (req, res) => {
  const { postId, commentId, message } = req.body

  try {
    const existingComment = await Comment.findOne({ commentId })

    if (existingComment) {
      return res.status(200).json({ commentId })
    }

    const newComment = new Comment({ postId, commentId, message })
    await newComment.save()

    res.status(201).json({ message: 'Комментарий успешно добавлен.' })
  } catch (error) {
    console.error('Ошибка при добавлении комментария:', error)
    res.status(500).json({ error: 'Ошибка при добавлении комментария.' })
  }
}

module.exports = createComment
