const express = require('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionCtrl')
 

//Route object
const router = express.Router()

//Add transaction post
router.post('/add-transection', addTransaction)
//Edit transaction post
router.post('/edit-transection', editTransaction)
//Delete transaction post
router.post('/delete-transection', deleteTransaction)

//get transactions
router.post('/get-transection', getAllTransaction)
module.exports = router