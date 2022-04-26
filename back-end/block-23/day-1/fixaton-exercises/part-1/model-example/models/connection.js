const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'thiago',
  password: 'thiago210',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection; 