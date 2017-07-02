const express = require('express')
const app = express()
const { PORT } = process.env

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.listen(PORT || 3001, (req, res) => console.log(`Listening on port: ${PORT || 3001}`))
