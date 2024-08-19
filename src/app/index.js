const express = require('express')
const app = express()
const { port } = require('./config.js')

app.use(express.static('public'))

app.get('/api/v1/image', (req, res) => {
  res.json({ params: req.params })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
