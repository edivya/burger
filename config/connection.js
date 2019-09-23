// Create connection between Node and MySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "burgers_db"
  });


// Establish the connection
connection.connect(function(error){
    if(error) {
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;