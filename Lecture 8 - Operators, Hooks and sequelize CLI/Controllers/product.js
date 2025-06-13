const Products = require('../models/product');
const{asyncWrapper} = require('../Middlewares/asyncWrapper');
const {Op} = require('sequelize');


exports.get =  asyncWrapper(async function(req,res){ 
     const products = await Products.findAll({
      // where:{
      //   [Op.and]:[
      //     {isAvailable:true},{price:{[Op.gt]:3000}}
      //   ]
      // },
      where:{
        id:[1,3,5,8,9]
      }
        // attributes:['id','name','price','isAvailable'] // returns some specific coloumns only
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