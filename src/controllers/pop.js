const data = require('../models/pop')

const getOnePop = (req, res, next) => {
  const num = req.params.num
  const info = data.getOnePop(num)
  res.status(200).json({info})
}

const getPopGreater = (req, res, next) => {
  const num = req.params.num
  const info = data.getPopGreater(num)
  res.status(200).json({info})
}

const getPopLess = (req, res, next) => {
  const num = req.params.num
  const info = data.getPopLess(num)
  res.status(200).json({info})
}

module.exports = { getOnePop, getPopGreater, getPopLess }
