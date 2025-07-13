const Product = require('../models/product.js'); 
const{asyncWrapper} = require('../middlewares/asyncWrapper');
const {Types} = require("mongoose");


exports.get =  asyncWrapper(async function(req,res){ 
     const products = await Product.find();
    res.status(200).send({products});
});

exports.post = asyncWrapper(async function(req,res){
            const {name,price,isAvailable} = req.body;
            const product = await Product.create({
                _id: new Types.ObjectId(),
                name:name,
                price :price,
                isAvailable: isAvailable,
            });
            console.log("Received body:", req.body);
            res.status(201).send({message:"Product added successfully",product});
});

exports.put = asyncWrapper(async function(req,res){
            const {name,price,isAvailable} = req.body;
            const {productid} = req.params;
            await Product.updateOne({
              _id : productid},{
                name,
                price,
                isAvailable
            });
            res.status(200).send({message:"Product updated successfully"});
});
      
exports.delete = asyncWrapper(async function(req,res){
            const {productid} = req.params;
            await Product.findByIdAndDelete(productid);
            res.status(200).send({message:"Product deleted successfully"});
});
    

exports.getOne = asyncWrapper(async function(req,res){
            const {productid} = req.params;
            const product = await Product.findOne({_id:productid});
            res.status(200).send({product});
});



