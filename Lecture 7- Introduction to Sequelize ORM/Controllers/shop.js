
const Shops = require('../models/shop');

const asyncWrapper=(fn)=>{
   return async(req,res,next)=>{
      try{
         await fn(req,res,next);
      }
      catch(err){
         next(err);
      }
   }
}

exports.get = asyncWrapper(async function(req,res){
         const shops = await Shops.findAndCountAll(); // if we want both shops and count then we can use this
         res.send(shops);
});

// const shops = await Shops.count(); // sends back no of shops in data base in this case its 5
//const shops = await Shops.findAll(); // send back all the shops in data base in this case its 5 


exports.post= asyncWrapper(async function(req,res){
            const {name,Address,price}=req.body;
            const shop= await Shops.create({
               name:name,
               Address:Address,
               price:price,
             })
            
             res.status(201).send(shop);
});

// const shop = await Shops.findOrCreate({
//    where:{
//       name:name
//    },
//    defaults:{
//       Address,
//       price,
//    }
// })
     

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
     
