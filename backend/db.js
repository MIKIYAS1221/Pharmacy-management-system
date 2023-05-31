const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mikiyas',
  password: '1q2w3r4e$R#E@W!Q',
  database: 'pharmacy'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL database as ID ' + connection.threadId);
});

module.exports = connection;
