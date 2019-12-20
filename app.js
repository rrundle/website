const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = process.env
const router = require('./router')

express()
  .use(express.static(`${__dirname}/public`))
  .use(bodyParser.json())
  .use('/notes', router)
  .listen(PORT || 3001, () => {
    console.log(`Listening on port ${PORT || 3001}`) // eslint-disable-line
  })
