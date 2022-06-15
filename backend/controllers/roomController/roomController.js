const asyncHandler = require('express-async-handler')
const Room = require('../../models/roomModel/roomModel')

//@desc add a room
//@route POST
//room 1-5 are 5 Seater (Fee is 14,000)
//room 6-10 are 4 seater (Fee is 16,000)
//room 11-15 are 3 seater (Fee is 18,000)
//room 16-20 are 2 seater (Fee is 20,000)
const addRoom = asyncHandler(async (req, res) => {

    const { roomNumber, roomType, roomFee } = req.body

    var status = "seats available"

    const room = await Room.create({
        roomNumber:roomNumber,
        roomType:roomType,
        roomFee:roomFee,
        status:status,
    })

    if (room) {
        res.status(201).json({
            _id: room.id,
            number: room.roomNumber,
            type: room.roomType,
            roomCount:room.roomCount,
            status:room.status,
            fee:room.roomFee
        })
    } else {
        res.status(400)
        throw new Error('Room not Created')
    }

})

//@desc edit a room
//@route POST
const editRoom = asyncHandler(async(req,res)=>{

    const updatedRoom = await Room.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json(updatedRoom)

})

//@desc get room By roomnumber
//@route POST
const getRoom = asyncHandler(async(req,res)=>{

    const { roomType} = req.body

   // console.log(req.params.id)

    const getRoom = await Room.find({roomType})

    res.status(201).json(getRoom)

})

module.exports = {
    addRoom,
    editRoom,
    getRoom
}