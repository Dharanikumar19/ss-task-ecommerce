const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product_id : {
        type : Number,
        unique : true,
        trim : true,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Cart" , cartSchema)