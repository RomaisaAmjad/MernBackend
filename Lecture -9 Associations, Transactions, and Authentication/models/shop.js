 module.exports =(sequelize,DataTypes)=>{
 const Shop = sequelize.define('shops',{

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
   
});
Shop.associate = (models)=>{ // one shop has many products
    Shop.hasMany (models.products,{
        foreignKey:'fk_shop_id',
        as:"products" // as--->alias; giving new name
    })
};
return Shop;
}

