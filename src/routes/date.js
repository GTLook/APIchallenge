const express = require('express')
const router = express.Router()
const controller = require('../controllers/date')

router.get('/:date', controller.getOne)

module.exports = router
