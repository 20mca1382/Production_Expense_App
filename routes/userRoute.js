const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

const router = express.Router()


//post|| login
router.post('/login', loginController)

//post method for registering user

router.post('/register', registerController)

module.exports = router