const mysql = require('mysql2');

const connection = mysql.createConnection({
    'database': 'petshop',
    'host': 'localhost',
    'port': 3306,
    'user': 'admin',
    'password': 'dropdead1'
})

module.exports = connection