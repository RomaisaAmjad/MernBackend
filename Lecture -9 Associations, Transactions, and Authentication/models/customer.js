const moment = require('moment');
module.exports = (sequelize,DataTypes)=>{

const Customer = sequelize.define('customers',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false, 
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true, // its a constraint that ensures that the email is unique in the database
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender:{
        type:DataTypes.ENUM('Male','Female'),
        allowNull:false,
    },
    balance:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
    },
    createdAt:{
        type:DataTypes.INTEGER,
        allowNull:false,
    
    },
    updatedAt:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
})


// beforeCreate is a hook that runs before a customer is created
Customer.beforeCreate(function(customer){
    customer.dataValues.createdAt = moment().unix();
    customer.dataValues.updatedAt = moment().unix();
})
return Customer;
}


