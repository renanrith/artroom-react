const express = require("express");
const router = express.Router();

const db = require("./db");

const jwt = require("jsonwebtoken");

router.post("/registrar", (req, res) => {
  const cadNickname = req.body.cadNickname;
  const cadUsername = req.body.cadUsername;
  const cadEmail = req.body.cadEmail;
  const cadPassword = req.body.cadPassword;
  const cadConfirm = req.body.cadConfirm;
  db.query(
    "select * from usuarios where usuario = ?",
    cadUsername,
    (err, results) => {
      if (results.length > 0) {
        console.log("ja tem burro");
      } else {
        if (cadConfirm == cadPassword) {
          db.query(
            "insert into usuarios(nickname, usuario, email, senha) values(?, ?, ?, ?);",
            [cadNickname, cadUsername, cadEmail, cadPassword],
            (err, results) => {
              if (err) {
                console.log(err);
              } else {
                console.log("registrado");
                res.send(results);
              }
            }
          );
        } else{
            console.log("senhas diferentes")
        }
      }
    }
  );
});

router.post("/logar", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE usuario = ?;",
    username,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length > 0) {
        if (password == results[0].senha) {
          const id = results[0].id;
          const accessToken = jwt.sign({ id }, "sbggbgehtehnethnetuhtehuy", {
            expiresIn: "1w",
          });
          res.json({ loggedIn: true, token: accessToken, result: results });
          console.log("logou");
        } else {
          res.json({ loggedIn: false, message: "Usuário ou senha incorretos" });
          console.log("Usuário ou senha incorretos");
        }
      } else {
        res.json({ loggedIn: false, message: "Usuário não existe" });
        console.log("Usuário não existe");
      }
    }
  );
});

module.exports = router;
