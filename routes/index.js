const express = require('express')
const router = express.Router()

const login = require('./login')
const register = require('./register')
const createSection = require('./createSection')
const getSectionbyId = require('./getSectionbyId')
const getSections = require('./getSections')
const updateSection = require('./updateSection')

router.use('/login', login)
router.use('/register', register)
router.use('/сreatesection', createSection)
router.use('/sections', getSections)
router.use('/sections', getSectionbyId)
router.use('/section', updateSection)

module.exports = router
