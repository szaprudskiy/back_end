const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({
  title: String,
  pageId: String,
  postId: String,
  token: String,
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
})

const Section = mongoose.model('Section', SectionSchema)

module.exports = Section
