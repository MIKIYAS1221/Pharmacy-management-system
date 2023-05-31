const express = require('express');
const router = express.Router();
const mysqlConnection = require('./db');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';

  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;

    res.json({ users: result });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM users WHERE id = ${id}`;

  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;

    res.json({ user: result[0] });
  });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  const sql = `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`;

  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;

    res.json({ message: 'User created successfully' });
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const sql = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id}`;

  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;

    res.json({ message: `User with ID ${id} updated successfully` });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM users WHERE id = ${id}`;

  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;

    res.json({ message: `User with ID ${id} deleted successfully` });
  });
});

module.exports = router;
