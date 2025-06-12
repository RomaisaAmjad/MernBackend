const sql = require("mysql2");

function connection(){

const connection = sql.createPool({ // we can use createConnection but it will create a new connection for each request but createPool will create a pool of connections and we can use them for multiple requests
     host : '127.0.0.1',
     port : 3306,
     user:'root',
     password:'Latamber07',
     database:'mern_bootcamp_2'
});

       return connection.promise();
}

module.exports = connection;