const data = require('../models/pop')

const getOnePop = (req, res, next) => {
  const num = request.params.num
  const info = data.getPop(num)
  res.status(200).json({info})
}

const getPopGreater = (req, res, next) => {
  const num = request.params.num
  const info = data.getPop(num)
  res.status(200).json({info})
}

const getPopLess = (req, res, next) => {
  const num = request.params.num
  const info = data.getPop(num)
  res.status(200).json({info})
}

module.exports = { getOnePop, getPopGreater, getPopLess }
