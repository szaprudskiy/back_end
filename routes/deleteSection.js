const express = require('express')
const deleteSection = require('../controllers/deleteSection')
const deleteSectionRouter = express.Router()

deleteSectionRouter.delete('/:sectionId', deleteSection)

module.exports = deleteSectionRouter
