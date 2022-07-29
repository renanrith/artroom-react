const express = require("express");
const router = express.Router();

const db = require('./db');

router.post("/registrar", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("insert into usuarios(email, senha) values(?, ?);", [username, password], (err, results) => {
        console.log(err);
        res.send(results);
        }
    );
});

router.post("/logar", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM usuarios WHERE email = ?;",
        username, 
        (err, results) => {
        if(err){
            console.log(err);
        }
        if(results.length > 0){
            if(password == results[0].senha){
                res.json({ loggedIn: true, username: username });
                console.log("logou")
            } else{
                res.json({loggedIn: false, message: "Usuário ou senha incorretos"})
                console.log("Usuário ou senha incorretos")
            }
        } else{
            res.json({loggedIn: false, message: "Usuário não existe"})
            console.log("Usuário não existe")
            }
        }
    );
});

module.exports = router;