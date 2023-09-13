const express = require('express')
const createSection = require('../controllers/createSection')
const createSectionRouter = express.Router()

createSectionRouter.post('/', createSection)

module.exports = createSectionRouter
