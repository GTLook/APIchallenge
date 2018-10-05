const express = require('express')
const router = express.Router()
const controller = require('../controllers/server')

router.get('/', controller.getAllServerInfo)

module.exports = router
