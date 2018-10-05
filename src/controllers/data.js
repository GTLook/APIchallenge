const data = require('../models/data')

const getAll = (req, res, next) => {
  const info = data.getAll()
  res.status(200).json({info})
}

module.exports = { getAll }
