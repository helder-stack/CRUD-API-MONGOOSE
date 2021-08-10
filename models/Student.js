const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name: String,
    lastName: String,
    completeName: String,
    age: Number
})
module.exports = mongoose.model('students', schema)