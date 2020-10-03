//setup code to connect Node to MySQL

// Set up MySQL connection.
var mysql = require("mysql");
if(process.env.JAWSDB_ULR) {
  var connection = mysql.createConnection(process.env.JAWSDB_ULR)
}else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3316,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
