const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({
  title: String,
  pageId: String,
  postId: String,
  token: String,
  userId: String,
  autoReplyText: String,
  autoReplyEnabled: Boolean,
  openAIAutoReplyEnabled: Boolean,
})

const Section = mongoose.model('Section', SectionSchema)

module.exports = Section
