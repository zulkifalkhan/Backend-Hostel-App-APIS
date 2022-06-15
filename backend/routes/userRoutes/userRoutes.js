const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getUsers} = require("../../controllers/userController/userController")

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/all',getUsers)

module.exports = router