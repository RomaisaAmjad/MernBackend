const products = require('../models/product');
const path = require('path');

module.exports = {

    get:function(req,res){
        res.render(path.join(__dirname,'../views','products'),{title:"Romaisa's Products",products});
    },

    post : function(req,res){
        const {productname,productprice} = req.body;
        products.push({productname,productprice});
        res.status(201).send({message:"Product added successfully"});
    },

    put:function(req,res){
        const {productname,productprice} = req.body;
        let{productid}= req.params;// extracting the productid from the request params
        productid = Number(productid); // converting into number
        if(!products[productid]){
            return res.status(404).send("Product not found");
        }
        products[productid].productname = productname;
        products[productid].productprice = productprice;
        res.status(200).send({message:"Product updated successfully"});
    },
    
    delete:function(req,res){
        let {productid} = req.params;
        productid = Number(productid);
        products.splice(productid,1);
        res.status(200).send({message:"Product deleted successfully"});
    },

}