const express = require('express');
const path = require('path');


const app = express();
const port = 4000;
const names=["Huma","Neha","Romaisa","Areeba","Hania","Areesha"];

app.use(express.json());
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.status(200).send("I am RestFul API");
});

app.get('/users',(req,res)=>{
    res.status(200).send("I am another RestFul API");
})

app.get('/names',(req,res)=>{
    res.status(200).render(path.join(__dirname,'views','names'),{title:"|Names|",names});
})

app.use((req,res)=>{
    res.status(404).send("Page not found");
})


app.listen(port,()=>{
    console.log("Server is running on port 4000");
});
