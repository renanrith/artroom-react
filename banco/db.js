const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "artroom"
});

module.exports = db;