const app = require('express')()
const bp = require('body-parser')
const mongoose = require('mongoose')
const connect = mongoose.connect('mongodb://localhost:27017/school', {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

const studentController = require('./controllers/Student.js')
app.use('/student', studentController)

app.listen(3001, error => {
    if (!error) {
        console.log('Server running')
    }
})