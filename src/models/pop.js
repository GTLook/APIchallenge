const convertToJSON = require('convert-csv-to-json')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '_penguin.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

const getOnePop = (number) => {
  return {
    format: 'date',
    data: data.find(day => day.Number == number)
  }
}

const getPopGreater = (number) => {
  return {
    format: 'date',
    data: data.filter(day => day.Number < number)
  }
}

const getPopLess = (number) => {
  return {
    format: 'date',
    data: data.filter(day => day.Number > number)
  }
}

module.exports = { getOnePop, getPopGreater, getPopLess }
