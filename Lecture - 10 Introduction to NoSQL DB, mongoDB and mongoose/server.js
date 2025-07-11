    const express = require('express');
    const connectToMongoDb = require('./models')
    const path = require('path');
    const app = express();
    const port = 3000;
    //Imports
    const productRouter = require('./routes/product');
    const shopRouter = require('./routes/shops');

    app.use(express.static('views'));
    app.use(express.json());

    //setting rendering engine
    app.set("view engine","ejs");

    connectToMongoDb();
    app.get('/',(req,res)=>{
        res.sendFile(__dirname + '/views/index.html');
    });

    app.use('/api/products',productRouter);
    app.use('/api/shops',shopRouter);

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })