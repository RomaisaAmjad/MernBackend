'use strict';
const tableName = 'customers';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable(tableName,{
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
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};
