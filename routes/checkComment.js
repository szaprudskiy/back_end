const express = require('express')
const checkComment = require('../controllers/checkComment')
const checkCommentRouter = express.Router()

checkCommentRouter.get('/', checkComment)

module.exports = checkCommentRouter
