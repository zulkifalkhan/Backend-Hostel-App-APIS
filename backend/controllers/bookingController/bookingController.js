const asyncHandler = require('express-async-handler')
const Book = require('../../models/bookingModel/bookingModel')
const UserDetail = require('../../models/userDetailModel/userDetailModel')
const Room = require('../../models/roomModel/roomModel')

//@desc book a room
//@route POST
const bookRoom = asyncHandler(async (req, res) => {

    const { rid, uid} = req.body

    //var status = "seats available"
    

    const book = await Book.create({
        user:uid,
        room:rid
    })

    const userDetail = await UserDetail.create({
        user:uid,
        feeStatus:"Not Paid",
        feeMonth:"June"
    })

    //also update in room detail status to booked for this rid

    const updateRoom = await Room.findOneAndUpdate(rid,{
        status:"Booked"
    })

    if (book) {
        res.status(201).json({
            _id: book.id,
            feeStatus:userDetail.feeStatus
        })
    } else {
        res.status(400)
        throw new Error('Room not Created')
    }

})


module.exports = {
    bookRoom
}