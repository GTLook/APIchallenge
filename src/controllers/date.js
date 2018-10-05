const data = require('../models/date')

const getOne = (req, res, next) => {
  const date = req.params.date
  const info = data.getOne(date)
  res.status(200).json({info})
}

module.exports = { getOne }
