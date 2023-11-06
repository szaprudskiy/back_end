const express = require('express')
const router = express.Router()

const login = require('./login')
const register = require('./register')
const createSection = require('./createSection')
const getSectionbyId = require('./getSectionbyId')
const getSections = require('./getSections')
const updateSection = require('./updateSection')
const deleteSection = require('./deleteSection')
const createComment = require('./createComment')
const checkComment = require('./checkComment')

router.use('/api/login', login)
router.use('/api/register', register)
router.use('/api/create', createSection)
router.use('/api/sections', getSections)
router.use('/api/sections', getSectionbyId)
router.use('/api/section', updateSection)
router.use('/api/delete', deleteSection)
router.use('/api/comment', createComment)
router.use('/api/checkcomment', checkComment)

module.exports = router
