const express = require('express')
const router = express.Router()
const {bookRoom} = require('../../controllers/bookingController/bookingController')

router.post('/book',bookRoom)

module.exports = router