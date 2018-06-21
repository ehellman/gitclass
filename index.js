const express = require('express')
const app = express()

app.use('/activities', (req, res) => {
  res.send(200)
})
app.use('/activities/:id', (req, res) => {
  res.send(200)
})

app.listen(3000)