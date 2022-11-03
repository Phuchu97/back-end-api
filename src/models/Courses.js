const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, minLength: 4},
    description: {type: String, minLength: 20},
    actor: {type: String, minLength: 4},
    dateEdit: {type: Date, default: Date.now},
    dateAdd: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Courses', Course)