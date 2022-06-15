const express = require('express')
const router = express.Router()
const {addRoom,editRoom,getRoom} = require('../../controllers/roomController/roomController')

router.post('/add',addRoom)
router.put('/edit/:id',editRoom)
router.get('/detail',getRoom)

module.exports = router