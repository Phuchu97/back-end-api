
const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const path = require('path')
const route = require('./routes')

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public/img')))

app.engine('hbs', hbs.engine({
  extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'recourse','views'));

route(app)


app.listen(3000)