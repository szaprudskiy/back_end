const express = require('express')
const getSectionbyId = require('../controllers/getSectionbyId')
const getSectionbyIdRouter = express.Router()

getSectionbyIdRouter.get('/:sectionId', getSectionbyId)

module.exports = getSectionbyIdRouter
