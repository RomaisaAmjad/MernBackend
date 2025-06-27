module.exports = (sequelize,DataTypes)=>{
    
const Product = sequelize.define('products',{
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
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
    
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
    },
})
   return Product;
}

