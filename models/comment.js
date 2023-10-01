const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  postId: String,
  commentId: String,
  message: String,
  replied: Boolean,
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
