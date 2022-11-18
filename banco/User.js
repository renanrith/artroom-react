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
        res.json({cadError: "Usuário já existe!"});
        console.log("ja tem burro");
      } else {
        if (cadConfirm == cadPassword) {
          db.query(
            "insert into usuarios(nickname, usuario, email, senha) values(?, ?, ?, ?);",
            [cadNickname, cadUsername, cadEmail, cadPassword],
            (err, results) => {
              if (err) {
                console.log(err);
                res.json({cadError: "porra"});
              } else {
                console.log("registrado");
                res.json({cadError: "Cadastro bem sucedido", results: results});
              }
            }
          );
        } else{
            console.log("senhas diferentes")
            res.json({cadError: "Senhas diferentes"});
        }
      }
    }
  );
});

router.post("/getInformations", (req, res) => {
  const getUser = req.body.getUser;
  db.query(
    "SELECT * FROM usuarios WHERE usuario = ?;",
    getUser, 
    (err, results) => {
      if (err) {
        console.log(err)
        console.log(getUser)
      }
      if (results.length > 0) {
        res.json({
          nickname: results[0].nickname, 
          usuario: results[0].usuario,
          userImage : results[0].userImage,
        })
        }
    }  
  )
})

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
          res.json({ loggedIn: true, token: accessToken, nick: results.nickname });
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

router.post("/pfp", (req, res) => {
  const user = req.body.username;
  const pfp = req.body.pfp;
  db.query(
    "UPDATE usuarios SET userImage = ? WHERE usuario = ?;",
    [pfp, user],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("pfp atualizada");
      }
    }
  );
  db.query(
    "UPDATE uploads SET userImage = ? WHERE user = ?;",
    [pfp, user],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("pfp atualizada");
      }
    }
  );
  db.query(
    "UPDATE comments SET userImage = ? WHERE user = ?;",
    [pfp, user],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("pfp atualizada");
      }
    }
  );
});



module.exports = router;
