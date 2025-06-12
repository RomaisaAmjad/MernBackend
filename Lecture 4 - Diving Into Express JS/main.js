const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;

const users = ['User1', 'User2', 'User3'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
    res.status(200).sendFile(path.join(__dirname,"/views/home.html"));
})

app.all('/', function(req, res, next) {
    console.log("First middleware received the request");
    next();
});


app.get('/users/:userId', function(req, res) {
    const userId = parseInt(req.params.userId);
    if(!users[userId]){
        return res.status(404).send("<h3>USER NOT FOUND</h3>");

    }
    const user = users[userId]; 
    res.status(200).send({ user });
});


app.get('/users/age', function(req, res) {
    res.send({ users });
});



app.post('/users', function(req, res) {
    console.log("req.body:",req.body);
    const{name}=req.body;
    users.push(name);
    res.status(201).send({users});
});

app.get('/', function(req, res) {
    console.log("Second middleware");
    res.send("<h1>Hello World from second middleware!</h1>");
});


// app.use('/users', function(req, res, next) {
//     res.send("HELLO FROM USErrr");
// });

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
