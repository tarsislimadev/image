const express = require('express')
const app = express()
const { port } = require('./config.js')

app.use(express.static('public'))

app.get('/image', (req, res) => {
  res.json({ query: req.query })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
