const express = require('express')
const router = express.Router()
const controller = require('../controllers/pop')

router.get('/greater/:num', controller.getPopGreater)
router.get('/less/:num', controller.getPopLess)
router.get('/exact/:num', controller.getOnePop)

module.exports = router
