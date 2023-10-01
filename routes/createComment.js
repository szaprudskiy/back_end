const express = require('express')
const createComment = require('../controllers/createComment')
const createCommentRouter = express.Router()

createCommentRouter.post('/', createComment)

module.exports = createCommentRouter
