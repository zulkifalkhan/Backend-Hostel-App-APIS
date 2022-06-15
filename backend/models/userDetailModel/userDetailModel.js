const mongoose = require('mongoose')

const userDetailSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'   
       },
    feeStatus: {
        type: String,
        required: true
    },
    feeMonth:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('UserDetail',userDetailSchema)