const {Schema, Types,model} = require("mongoose");

const productSchema = new Schema({
    id:{
        type: Types.ObjectId,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    },
    UpdatedAt:{
        type: Date,
        required: true,
        default: Date.now,
    }

    
});

module.exports = model("Product", productSchema);