const data = require('../models/server')

const getAllServerInfo = (req, res, next) => {
  const info = data.getAllServerInfo()
  res.status(200).json({info})
}

module.exports = { getAllServerInfo }
