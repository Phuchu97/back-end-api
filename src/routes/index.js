const headerRouter = require('./header')

function route(app) {
    app.use('/header', headerRouter)
} 

module.exports = route