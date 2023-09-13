const express = require('express')
const updateSection = require('../controllers/updateSection')
const updateSectionRouter = express.Router()

updateSectionRouter.put('/:sectionId', updateSection)

module.exports = updateSectionRouter
