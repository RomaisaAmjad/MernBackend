const path = require('path');
const Shops = require('../models/shop');
const { toNamespacedPath } = require('path/posix');

module.exports={

   get: async function(req,res){
      try{
        // const shops = await Shops.count(); // sends back no of shops in data base in this case its 5
         //const shops = await Shops.findAll(); // send back all the shops in data base in this case its 5 
         // if we want both shops and count then we can use this
         const shops = await Shops.findAndCountAll();
         res.send(shops);
       
      }
      catch(err){
         console.log(err);
         res.status(500).send("Something went wrong!");
      }
   },

   post : async function(req,res){
      try{
              const {name,Address,price}=req.body;
            // const shop= await Shops.create({
            //    name:name,
            //    Address:Address,
            //    price:price,
            //  })
            const shop = await Shops.findOrCreate({
               where:{
                  name:name
               },
               defaults:{
                  Address,
                  price,
               }
            })
             res.status(201).send(shop);
      }
      catch(err){
         console.log(err);
         res.status(500).send("something went wrong!");   
         }
   },

   getOne: async function(req,res){
      try{
         const{shopid} = req.params;
         const shop = await Shops.findByPk(shopid);
         res.status(200).send({shop});
      }
      catch(err){
         console.log(err);
         res.status(500).send("something went wrong!");   
      }
   },

   put: async function(req,res){
      try{
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
      }
      catch(err){
         console.log(err);
         res.status(500).send("something went wrong!");   
      }
   },

   delete: async function(req,res){
      try{
         const{shopid} = req.params;
         await Shops.destroy({
            where:{
               id : shopid
            }
         })
         res.status(200).send("Shop deleted successfully!");
      }
      catch(err){
         console.log(err);
         res.status(500).send("something went wrong!");   
      }
   }
     
}