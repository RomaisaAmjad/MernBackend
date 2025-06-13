
const Customers = require('../models/customer');
const{asyncWrapper} = require('../Middlewares/asyncWrapper');
const bcrypt = require('bcryptjs');


exports.get = asyncWrapper(async function(req,res){
         const customers = await Customers.findAndCountAll(); 
         res.send(customers);
});



exports.post= asyncWrapper(async function(req,res){
            const {name,email,password,gender,balance}=req.body;
            const salt = await bcrypt.genSalt(12); // 12 is the number of rounds of hashing for hashing the password randomly for security
            const hashedPassword = await bcrypt.hash(password,salt);
            const customer= await Customers.create({
               name:name,
               email:email,
               password:hashedPassword,
               gender:gender,
               balance:balance,
             })
            
             res.status(201).send(customer);
});


     

exports.getOne = asyncWrapper(async function(req,res){
         const{customerid} = req.params;
         const customer = await Customers.findByPk(customerid);
         res.status(200).send({customer});
      });

exports.put = asyncWrapper(async function(req,res){
      
      const {name,email,password,gender} = req.body;
      const{customerid} = req.params;
      await Customers.update({
         name,
         email,
         password,
         gender
      },{
         where:{
            id:customerid
         }
      })
      res.status(200).send("Customer updated successfully!");
});

exports.delete = asyncWrapper(async function(req,res){
         const{customerid} = req.params;
         await Customers.destroy({
            where:{
               id : customerid
            }
         })
         res.status(200).send("Shop deleted successfully!");
   });
     
