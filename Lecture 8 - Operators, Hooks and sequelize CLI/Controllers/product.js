const {products:Products} = require('../models/index.js'); //Note: In JS projects by default import file is index.js so if we donot write the name for it, the code will work
const{asyncWrapper} = require('../Middlewares/asyncWrapper');
const {Op} = require('sequelize');


exports.get =  asyncWrapper(async function(req,res){ 
     const products = await Products.findAll({
     });
    res.status(200).send({products});
});

exports.post = asyncWrapper(async function(req,res){
            const {name,price,isAvailable} = req.body;
            const product = await Products.create({
                name:name,
                price :price,
                isAvailable: isAvailable,
            });
            console.log("Received body:", req.body);
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