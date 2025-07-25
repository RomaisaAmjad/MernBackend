'use strict';

const tableName = 'products';
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
        type:DataTypes.STRING, // string is varchar(255) and if not 25 then text is used
        allowNull:false, // we can also give default value here 
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    isAvailable:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    },
    fk_shop_id:{
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};
