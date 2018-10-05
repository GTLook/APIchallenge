const convertToJSON = require('convert-csv-to-json')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '_penguin.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

const getAll = () => {
  return data
}

module.exports = { getAll }
