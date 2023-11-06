const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  postId: String,
  commentId: String,
  message: String,
  autoReply: Boolean,
  openAIautoReply: Boolean,
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
