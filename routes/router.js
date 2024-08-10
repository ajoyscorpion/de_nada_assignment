const express = require('express')

const itemsController = require('../controller/itemsController')
const billsController = require('../controller/billsController')

const router = new express.Router()

// all Items
router.get('/allItems',itemsController.getAllItems)

// add item
router.post('/addItem',itemsController.createItem)

// update item
router.put('/updateItem/:id',itemsController.updateItem)

// delete item
router.delete('/deleteItem',itemsController.deleteItem)

// get all bills
router.get('/getAllBills',billsController.getAllBills)

// get bill
router.get('/getbill/:billNo',billsController.getBill)

// create bill
router.post('/createBill',billsController.createBill)

// export router
module.exports = router  