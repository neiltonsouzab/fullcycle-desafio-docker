const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

module.exports = connection;