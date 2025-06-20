
const {shops:Shops} = require('../models/index.js');
const{asyncWrapper} = require('../Middlewares/asyncWrapper');

exports.get = asyncWrapper(async function(req,res){
         const shops = await Shops.findAndCountAll(); // if we want both shops and count then we can use this
         res.send(shops);
});


exports.post= asyncWrapper(async function(req,res){
            const {name,price}=req.body;
            const shop= await Shops.create({
               name:name,
               price:price,
             })
            
             res.status(201).send(shop);
});



exports.getOne = asyncWrapper(async function(req,res){
         const{shopid} = req.params;
         const shop = await Shops.findByPk(shopid);
         res.status(200).send({shop});
      });

exports.put = asyncWrapper(async function(req,res){
      
      const {name,price} = req.body;
      const{shopid} = req.params;
      await Shops.update({
         name,
         price
      },{
         where:{
            id:shopid
         }
      })
      res.status(200).send("Shop updated successfully!");
});

exports.delete = asyncWrapper(async function(req,res){
         const{shopid} = req.params;
         await Shops.destroy({
            where:{
               id : shopid
            }
         })
         res.status(200).send("Shop deleted successfully!");
   });
     
