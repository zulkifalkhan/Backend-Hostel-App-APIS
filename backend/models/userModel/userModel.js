const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    phone:{
        type:Number,
        required:[true,'Please add a Phone Number']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    role:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User',userSchema)