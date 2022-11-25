const mysql2 = require('mysql2');


//Criando conexão com o banco
const db = mysql2.createConnection({
    host: "localhost", // nome do host
    user: "root", // nome do usuário
<<<<<<< HEAD
    password: "1234", // senha do banco
=======
    password: "Skarskar15995", // senha do banco
>>>>>>> 7ba4712e2f017ba1d9b7b73ee43bc03607586d91
    database: "artroom" // nome do banco
});

module.exports = db;