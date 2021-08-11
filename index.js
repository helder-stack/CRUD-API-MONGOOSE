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

const studentRoutes = require('./routes/StudentRoutes.js')
app.use('/student', studentRoutes)

app.listen(3001, error => {
    if (!error) {
        console.log('Server running')
    }
})