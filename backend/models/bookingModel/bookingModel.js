const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        user:{
         type:mongoose.Schema.Types.ObjectId,
         required:true,
         ref:'User'   
        },
        room:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Room'   
           },
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Book',bookSchema)