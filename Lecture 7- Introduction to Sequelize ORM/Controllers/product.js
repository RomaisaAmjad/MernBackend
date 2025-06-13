const path = require('path');
const Products = require('../models/product');

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error); // handles the error
      }
    };
  };


exports.get =  asyncWrapper(async function(req,res){ 
     const products = await Products.findAll();
         //{order:[['price','ASC']], });     // we can add limit and offset here
     res.render(path.join(__dirname,'../views','products'),{title:"Romaisa's Products",products:products});
});

exports.post = asyncWrapper(async function(req,res){
            const {name,price,isAvailable} = req.body;
            const product = await Products.create({
                name:name,
                price :price,
                isAvailable: isAvailable,
            });
            res.status(201).send({message:"Product added successfully",product});
});

exports.put = asyncWrapper(async function(req,res){
            const {name,price,isAvailable} = req.body;
            let{productid}= req.params;
            productid = Number(productid); 
            await Products.update({
                name,
                price,
                isAvailable
            },{
                where:{id : productid}
            });
            res.status(200).send({message:"Product updated successfully"});
});
      
    
exports.delete = asyncWrapper(async function(req,res){
            const {name,price} = req.body;
            let{productid}= req.params;
            productid = Number(productid); 
            await Products.destroy({
              where:{
                id:productid
              }
              
            })
            res.status(200).send({message:"Product deleted successfully"});
});
    

exports.getOne = asyncWrapper(async function(req,res){
            const {productid} = req.params;
            const product = await Products.findByPk(productid);
            res.status(200).send({product});
});



 //  const product = await Products.findOne({
            //     where:{
            //         id:productid // if data is available then it will return the product else it will return null
            //     }
            //  });
// const products = await Products.findAll(
//     {where:{
//             name:"BTS Book",
//         }
//     }); if needed only one product then use findOne IF IT DOESNT FIND ANYTHING THEN IT WILL RETURN EMPTY ARRAY