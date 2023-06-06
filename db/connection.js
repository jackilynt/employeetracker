// // connection.js

// const mysql = require('mysql2');

// // Create a connection pool
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'sqlpassword',
//   database: 'employee_db',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// // Get a connection from the pool
// const connection = pool.promise();

// module.exports = connection;

// connection.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'sqlpassword',
  database: 'employee_db',
});

module.exports = connection;

