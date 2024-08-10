const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    billNo : {
        type:Number,
        required:true
    },
    items : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Bill Items',
            required:true
        }
    ],
    total : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Bills",billSchema)