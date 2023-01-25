const { response } = require('express')
const Employee = require('../models/Employee')


// list 
const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'ERROR LIST'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

const store = (req,res,next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
            massage: 'Employee Added Sucessfuly'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error in adding'
        })
    })
}

const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(response => {
        res.json({
            message: 'update'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

// delete
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        req.json({
            message : 'Deleted'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

module.exports ={
    index, show, store, update, destroy
}




