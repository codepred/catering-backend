const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const cors = require('cors');


const EmployeeRoute = require('./routes/employee')
const router = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/catering', {useNewUrlParser: true, useUNifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', ()=> {
    console.log('connection is ok11')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('app runing on port 3000')
})

app.use(cors())

app.use('/api/employee', EmployeeRoute)