const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: [true, "type is required"],
    },
    amount:{
        type: Number,
        required: [true, "Amount is required"],
    },
    category:{
        type: String,
        required:[true, "Category is required"],
    },
    reference:{
        type: String,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    date:{
        type: Date,
        required: [true, "date is required"],
    },
},
{timestamps: true}
)

const transactionModel = mongoose.model('Transactions',transactionSchema )

module.exports = transactionModel