// Initilize modules
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')

const path = require('path')
const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


// Routes
app.use('/', require('./src/routes/server'))
app.use('/api/', require('./src/routes/data'))
app.use('/api/pop/', require('./src/routes/pop'))
app.use('/api/date/', require('./src/routes/date'))


// Default Route
app.use((req, res, next) => next({status: 404, message: 'Route not found' }))


// Error Handling
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

// Starting Server
const port = 8080
app.listen(port, () => {console.log(`Listening on port ${port}`)})
module.exports = app
