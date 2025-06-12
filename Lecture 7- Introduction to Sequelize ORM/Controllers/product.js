
const path = require('path');
const Products = require('../models/product');

module.exports = {

    get: async function(req,res){ // if data is available then it will return the product else it will return empty array
        try{
            const products = await Products.findAll(
                {order:[['price','DESC']],
                limit:2,// only  products will be returned
                offset:2// skips the first 2 products
                }// this is used to sort the products by price in descending order
                
            ); // findAll is a method to get all the products from the database (SELECT * FROM products)
            res.render(path.join(__dirname,'../views','products'),{title:"Romaisa's Products",products:products}); // sending the products to the view
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
        
    },

    post : async function(req,res){
        try{
            const {name,price,Available} = req.body;
            const product = await Products.create({
                name:name,
                price :price,
                Available: Available,
            });
            res.status(201).send({message:"Product added successfully",product});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
       
    },

    put: async function(req,res){
        try{
            const {name,price,Available} = req.body;
            let{productid}= req.params;// extracting the productid from the request params
            productid = Number(productid); // converting into number
            await Products.update({
                name,
                price,
                Available
            },{
                where:{
                    id : productid
                }
            })
          
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

            await Products.destroy({
                where:{
                    id : productid
                }
            })
          
           
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
            const product = await Products.findByPk(productid);
            //  const product = await Products.findOne({
            //     where:{
            //         id:productid // if data is available then it will return the product else it will return null
            //     }
            //  });
            res.status(200).send({product});
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong!")
        }
        
    },

    
}



// const products = await Products.findAll(
//     {where:{
//             name:"BTS Book",
//         }
//     }); if needed only one product then use findOne IF IT DOESNT FIND ANYTHING THEN IT WILL RETURN EMPTY ARRAY