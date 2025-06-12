const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Welcome To My Assignment 2</h1>");
        res.write("<p>I am given tasks of implementing Data handling in the backend</p>");
        return res.end();
    }

    if (url === '/product' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end(`
            <form action="/product" method="POST">
                <input type="text" name="Product" placeholder="ProductName"/><br/>
                <input type="text" name="Shop" placeholder="ShopName"/><br/>
                <input type="submit"/>
            </form>
        `);
    }

    if (url === '/product' && method === 'POST') {
        res.statusCode = 200;
        const data = [];

        req.on("data", (chunk) => {
            data.push(chunk);
        });

        req.on("end", () => {
            const result = Buffer.concat(data).toString();
            const parse = new URLSearchParams(result); // for individual key value 
            const productname = parse.get("Product");
            const shopname = parse.get("Shop");
            fs.writeFileSync("data.txt", result);
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h2>Your Data:<br/>Prouct Name:${productname}<br/>Shop Name:${shopname}</h2>`);
        });

        return;
    }

    else{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end("<h2>ERROR 404: NOT FOUND</h2>");
    }
});

server.listen(4000);
