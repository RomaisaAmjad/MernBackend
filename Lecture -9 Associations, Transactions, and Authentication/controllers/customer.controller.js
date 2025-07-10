const {customers:Customers, carts:Cart, sequelize} = require('../models/index.js');
const{asyncWrapper} = require('../middlewares/asyncWrapper.middleware.js');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { jwt_secret } = require('../constants/index.js');


exports.get = asyncWrapper(async function(req,res){
         const customers = await Customers.findAndCountAll(); 
         res.send(customers);
}); 


exports.signup = asyncWrapper(async function (req, res) {
   const transaction = await sequelize.transaction();
   try {
     const { name, email, password, gender, balance } = req.body;
 
     const salt = await bcrypt.genSalt(12);
     const hashedPassword = await bcrypt.hash(password, salt);
 
     const [customer] = await Customers.findOrCreate({
       where: { email },
       defaults: {
         name,
         password: hashedPassword,
         gender,
         balance,
       },
       transaction : transaction
     });
 
     await Cart.findOrCreate({
       where: { fk_customer_id: customer.id },
       transaction,
     });
 
     await transaction.commit();  // releases lock
 
     res.status(201).send(customer);
   } catch (err) {
     await transaction.rollback(); // if error then 
     throw err; 
   }
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

   exports.login = asyncWrapper(async function(req,res){
      const{email,password} = req.body;
      const customer = await Customers.findOne({
         where:{
            email : email
         }
      })
      if(!customer){
         return res.status(404).send("Customer not found!");
      }
      const passwordMatched = await bcrypt.compare (password, customer.password)
      if(!passwordMatched){
         return res.status(401).send("Password is incorrect");
      }
      const plainObjectCustomer = await customer.toJSON(); // before sending convert it to  JSON (only for objects not for arrays)
      const token = await jwt.sign(plainObjectCustomer,jwt_secret); // second one is secret key stored as constant as it is a good practice to store it like this.
    
      res.status(200).send({
         customer,
         token
      });
}); 

exports.getOne = asyncWrapper(async function(req,res){
   const {customerId} = req.params
   const customer = await Customers.findByPk(customerId); 
   res.status(200).send(customer);
}); 

     
