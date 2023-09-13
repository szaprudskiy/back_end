const mongoose = require('mongoose')

const Section = mongoose.model('Section', {
  title: String,
  fieldF: String,
  fieldS: String,
})
module.exports = Section
