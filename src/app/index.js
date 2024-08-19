const express = require('express')
const app = express()
const { port } = require('./config.js')

app.use(express.static('public'))

app.get('/image', (req, res) => res.sendFile('/data/image.png'))

app.listen(port, () => console.log(`Listening on port ${port}`))
