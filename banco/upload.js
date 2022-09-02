const express = require("express");
const router = express.Router();

const db = require("./db");

router.post("/uploads", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const author = req.body.author;
    const type = req.body.type;

    //fazer o sistema de checagem do tipo de post

    db.query(
        "insert into uploads(title, description, user, type) values(?, ?, ?, ?);",
        [titulo, descricao, author, type],
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log("postado");
                res.send(results);
            }
        })
});

router.get("/posts", (req, res) => {
    db.query("select * from uploads;", (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
            console.log(results);
        }
    })
}
);

router.post("/perfilPost", (req, res) => {
    const username = req.body.username;
    db.query("SELECT * FROM uploads WHERE user = ?;", username, (err, results) => {
        if (err) {
            console.log(err);
            console.log(nick)
        } else {
            res.json(results);
}})});

module.exports = router;