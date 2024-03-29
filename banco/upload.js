const express = require("express");
const router = express.Router();

const db = require("./db");

router.post("/uploads", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const author = req.body.author;
    const type = req.body.type;
    const image = req.body.image;
    const like = req.body.like;
    const userImage = req.body.userImage;

    db.query(
        "insert into uploads(title, description, user, type, image, likes, userImage) values(?, ?, ?, ?, ?, ?, ?);",
        [titulo, descricao, author, type, image, like, userImage],
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

router.post("/insertComments", (req, res) => {
    const comentario = req.body.comentario;
    const user = req.body.user;
    const id = req.body.id;
    const userImage = req.body.userImage;

        db.query( "insert into comments(texto, user, userImage, postID) values(?, ?, ?, ?)", [comentario, user, userImage, id], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log("comentado");
                res.send(results);
            }
        })
});

router.post("/showComments", (req, res) => {
    const id = req.body.id;

    db.query("select * from comments where postID = ?", [id],
    (err, results) => {
        if (err){
            console.log(err)
        } else {
            res.send(results)
            console.log(results)
        }
    })

})

router.post("/like", (req, res) => {
    const user = req.body.user;
    const postID = req.body.id;

    db.query("select * from userLiking where user = ? and postID = ?;", [user, postID], (err, results) => {
        if(results.length > 0){
            db.query("delete from userLiking where user = ? and postID = ?;", [user, postID])
            db.query("update uploads set likes = likes - 1 where id = ?", [postID])
            console.log("descurtiu")
        } else {
    db.query("insert into userLiking(user, postID) values(?, ?)", [user, postID], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query("update uploads set likes = likes + 1 where id = ?", postID, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("liked")
                }
            }
            )
        }
    })
}
    })
})

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