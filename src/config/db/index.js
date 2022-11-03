const mongoose = require('mongoose')

async function ConnectDb() {
    try {
        mongoose.connect('mongodb://localhost:27017/web_film', {

        })
        console.log('Connect Success!');
    } catch {
        console.log('Connect Failer!');
    }
}

module.exports = { ConnectDb };