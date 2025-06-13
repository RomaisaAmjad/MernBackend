const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
     dialect: 'mysql',
     host:'127.0.0.1',
     username:'root',
     password:'Latamber07',
     database:'mern_bootcamp_2',
     port:3306,
});// no need for wrapping it in a function because we are using the sequelize library which gives some rules to follow

 // checks if the connection is successful
sequelize.authenticate().then(()=>{
     console.log('Connection has been established successfully.');

}).catch((err)=>{
     console.log('Error',err);
});

//syncing the models with the database
sequelize.sync().then(()=>{
     console.log('synced!');
}).catch((err)=>{
     console.log('Error',err); 
})
module.exports = sequelize;



     