const http = require('http'); // common js syntax
const {generateHTML,message} = require('./util');
const fs = require("fs");

// or const generateHTML = require('./util').generateHTML; BOTH WORKS THE SAME WAY BUT DESTRUCTURING ONE IS GOOD APPROACH

// we can use ESM modules to integrate node js but it will need package.json files to run

function requestHandler(req,res){
    const {url,method} = req;
    if(url === '/' && method === 'GET'){
        res.setHeader('Content-Type','text/html');
        res.write(message());
        res.end(generateHTML("My App","<h1>Hello World</h1>"
        ));
    }
    else if(url === '/user' && method === 'GET'){
        res.setHeader('Content-Type','text/html');
        res.end(generateHTML("Users","<form action='/user' method ='POST'><input type='text' name='email'/><input type='submit'/></form>"));
    }
    else if(url == '/user' && method =='POST'){
        const data= [];
        req.on("data", function(chunk){
            data.push(chunk);
        })
        req.on("end",function(){
            const result = Buffer.concat(data).toString();
            res.setHeader('Content-Type','text/html');
            fs.writeFileSync("body.txt",result); // body.txt should save the result coming from request 
            res.end(result);
        })
    }
    
    else{
        res.setHeader('Content-Type','text/html');
        res.end(generateHTML("404","<h1>Page Not Found</h1>"));
    }
    
}

const server = http.createServer(requestHandler);
server.listen(4000);











// server.on('request',(req,res)=>{
//     console.log("Server is listening on port 4000");
//     res.end("<h1>Hello World</h1>");
// })
// server.listen(4000);

//NOTE: Both works the same way 
// const server = http.createServer(
//     (req,res)=>{
//         console.log("Server is listening on port 4000");
//         res.end("<h1>Hello World</h1>");
//     });