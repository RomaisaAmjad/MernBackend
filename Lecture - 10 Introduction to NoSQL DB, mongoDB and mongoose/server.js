    const express = require('express');
    const connectToMongoDb = require('./models')
    const path = require('path');
    const app = express();
    const port = 3000;
    //Imports
    const productRouter = require('./routes/product');

    app.use(express.static('views'));
    app.use(express.json());

    app.set("view engine","ejs");

    connectToMongoDb();
    app.get('/',(req,res)=>{
        res.sendFile(__dirname + '/views/index.html');
    });

    app.use('/api/products',productRouter);


    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })