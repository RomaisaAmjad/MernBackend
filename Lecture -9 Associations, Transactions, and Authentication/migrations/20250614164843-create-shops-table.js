'use strict';
const tableName = 'shops';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) { // DataTypes is actually Sequelize.DataTypes
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shops');
  }
};

// queryInterface facilitates in communicating with the databaseb 
