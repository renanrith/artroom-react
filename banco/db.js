const mysql2 = require('mysql2');


//Criando conexão com o banco
const db = mysql2.createConnection({
    host: "localhost", // nome do host
    user: "root", // nome do usuário
    password: "Skarskar15995", // senha do banco
    database: "artroom" // nome do banco
});

module.exports = db;