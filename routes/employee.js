const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Schema = mongoose.Schema
const router = express.Router()


const EmployeeController = require('../controllers/EmployeeController')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.post('/delete', EmployeeController.destroy)
router.post('/update', EmployeeController.update)

module.exports = router