const {Schema, Types,model} = require("mongoose");

const productSchema = new Schema({
    _id:{
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
    isAvailable:{
        type: Boolean,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        required: true,
        default: Date.now,
    }

    
});

module.exports = model("Product", productSchema);