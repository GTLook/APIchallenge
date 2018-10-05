const express = require('express')
const router = express.Router()
const controller = require('../controllers/pop')

router.get('/exact/:num', controller.getOnePop)
router.get('/greater/:num', controller.getPopGreater)
router.get('/less/:num', controller.getPopLess)

module.exports = router
