const mysql = require('mysql');

let connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'elouan-p7'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection;
