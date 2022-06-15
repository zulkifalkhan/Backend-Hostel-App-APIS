const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    roomNumber :{
        type:Number,
        default:0,
        required:true
    },
    roomType:{
        type:String,
        required:true
    },
    roomFee:{
        type:Number,
        default:0,
        required:true
    },
    status:{
        type:String,
    },
    roomCount:{
        type:Number,
        default:0
    }
}
,
    {
        timestamps: true
    }) 

module.exports = mongoose.model('Room',roomSchema)