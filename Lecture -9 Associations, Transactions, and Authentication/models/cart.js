module.exports =(sequelize,DataTypes)=>{
    const Cart = sequelize.define('carts',{
   
       id:{
           type : DataTypes.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true,
       },
       fk_customer_id:{
           type:DataTypes.INTEGER,
           allowNull:false, 
       },
       createdAt:{
           type:DataTypes.DATE,
           allowNull:false,
       
       },
       updatedAt:{
           type:DataTypes.DATE,
           allowNull:false,
       },
      
   });
  
   return Cart;
   }
   
   