const mongoose = require('mongoose')

const billItemSchema = mongoose.Schema({
    item :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "items",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Bill Items",billItemSchema)