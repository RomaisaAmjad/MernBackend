const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(5000,function(){
    console.log("Server is running and I love Chai😁😁"); // executes when the server sucessfully starts running
});
