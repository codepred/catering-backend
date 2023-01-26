const { response } = require('express')
const Employee = require('../models/Employee')



// list 
// const index = (req, res, next) => {
//     Employee.find()
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'ERROR LIST'
//         })
//     })
// }


const index = (req, res) => {
    Employee.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
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
        amount: 1
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
    let employeeID = req.body.id

    if(req.body.action === 'plus'){
        req.body.amount = req.body.amount +1;
    }

    if(req.body.action === 'minus'){
        req.body.amount = req.body.amount -1;
    }
    console.log(req.body.amount)
    console.log(employeeID)
    let updateData = {
        amount: req.body.amount
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

const destroyAll = (req, res, next) => {
    Employee.remove()
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
    index, show, store, update, destroy, destroyAll
}




