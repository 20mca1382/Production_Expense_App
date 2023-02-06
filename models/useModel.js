const mongoose = require('mongoose')

//schema design
const useSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required and must be unique"],
        unique: true,
    },
    password: {
        type: String,
        required : [true, "password is required"]
    }
},
{timestamps: true}
);

const userModel = mongoose.model("users", useSchema)
module.exports = userModel