    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000;
    //Imports

    const shopRouter = require('./routes/shops.route');
    const customerRouter = require('./routes/customer.route');

    app.use(express.static('views'));
    app.use(express.json());

    //setting rendering engine
    app.set("view engine","ejs");

    app.get('/',(req,res)=>{
        res.sendFile(__dirname + '/views/index.html');
    });

    
    app.use('/api/shops',shopRouter);
    app.use('/api/customers',customerRouter);

    app.use(function(req,res){
        res.status(404).send("Invalid Route, Not Found!")
    })

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })