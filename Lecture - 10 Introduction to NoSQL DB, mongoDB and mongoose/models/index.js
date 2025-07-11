const mongoose = require("mongoose");

async function connectToMongoDb(){
  try{
    const connectionURI = "mongodb://localhost:27017/mongodb_playground";
      await  mongoose.connect (connectionURI);

        console.log("Database connected successfully!");
  }
  catch(err){
    console.log("Connection failed with error:",err);
  }
}

module.exports = connectToMongoDb;