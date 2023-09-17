const express = require('express')
const getSections = require('../controllers/getSections')
const getSectionsRouter = express.Router()

getSectionsRouter.get('/', getSections)

module.exports = getSectionsRouter
