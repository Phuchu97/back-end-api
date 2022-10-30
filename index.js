const express = require('express')
const app = express()

app.get('/back-end', function (req, res) {
  res.send('Trang API của Phú')
})

app.listen(3000)