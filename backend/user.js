const mysqlConnection = require('./db');

const sql = `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

mysqlConnection.query(sql, (err, result) => {
  if (err) throw err;

  console.log('Table "users" created successfully');
});
