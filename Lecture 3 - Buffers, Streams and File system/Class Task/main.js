const http = require('http');
const{message} = require('./data.js');

const server=http.createServer((req,res)=>{
    
    
    const url = req.url;
    const method = req.method;
    if(url=='/' && method == 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello");
    console.log(message);
     return res.end();
    }
})

server.listen(3000);