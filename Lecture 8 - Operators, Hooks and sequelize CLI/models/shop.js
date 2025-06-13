// model are code representations of the database tables
// No of models = No of tables
const sequelize = require('./index'); // importing the sequelize instance
const {DataTypes} = require('sequelize'); // importing the DataTypes from the sequelize library


const Shop = sequelize.define('shops',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING, // string is varchar(255) and if not 25 then text is used
        allowNull:false, 
    },
    price:{
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
})

// This model will be imported by controller so we will export it from here
module.exports = Shop;


// Why we need to define schema?
// As we are using this library for easily inserting and deleting and all the stuff, before ORM what were we doing? calling the quereis of SQL with datatypes and values but when we define models and schema we can easily insert and delete and all the stuff without specifying the fields and values