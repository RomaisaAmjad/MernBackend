const connection = require('../models/index');
const path = require('path');

module.exports = {

    get: async function(req,res){
        try{
            const db = await connection(); // as its a function we need to call it and yes its something which might take time so we need to use await
            const [products] = await db.execute("SELECT * FROM products");
            console.log(products);
            res.render(path.join(__dirname,'../views','products'),{title:"Romaisa's Products",products:products}); // sending the products to the view
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
        
    },

    post : async function(req,res){
        try{
            const {name,price} = req.body;
            const date = new Date();
            const db = await connection(); // as its a function we need to call it and yes its something which might take time so we need to use await
            await db.execute(`INSERT INTO products (name,price,createdAt,updatedAt) VALUES ('${name}',${price},'${date.toISOString().slice(0,10)}','${date.toISOString().slice(0,10)}')`);
            res.status(201).send({message:"Product added successfully"});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
        
       
    },

    put: async function(req,res){
        try{
            const {name,price} = req.body;
            let{productid}= req.params;// extracting the productid from the request params
            productid = Number(productid); // converting into number
          
            const date = new Date();
            const db = await connection(); // as its a function we need to call it and yes its something which might take time so we need to use await
            await db.execute(`UPDATE products SET name = '${name}',price = ${price} WHERE ID = ${productid}`);
            res.status(200).send({message:"Product updated successfully"});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }

    },
    
    delete:async function(req,res){

        try{
            const {name,price} = req.body;
            let{productid}= req.params;// extracting the productid from the request params
            productid = Number(productid); // converting into number
          
            const date = new Date();
            const db = await connection(); // as its a function we need to call it and yes its something which might take time so we need to use await
            await db.execute(`DELETE  FROM products WHERE ID = ${productid}`);
            res.status(200).send({message:"Product deleted successfully"});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
       
    },

    getOne: async function(req,res){
        try{
            const {productid} = req.params;
            const db = await connection(); // as its a function we need to call it and yes its something which might take time so we need to use await
            const [products] = await db.execute(`SELECT * FROM products WHERE id = ${productid}`);
            console.log(products);
            res.status(200).send({products});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
        
    },

    
}