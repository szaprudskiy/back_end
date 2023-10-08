const express = require('express')
const checkComment = require('../controllers/checkComment')
const checkCommentRouter = express.Router()

checkCommentRouter.post('/', checkComment)

module.exports = checkCommentRouter
