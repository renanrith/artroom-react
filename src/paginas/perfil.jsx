import classes from "./perfilcss.module.css"
import chirio from "./../imagens/imgperfil/chirio.jpg";
import PostsLists from "../components/posts/postImagem/posts_list";
import MainNavigation from "../components/layout/MainNavigation";

import { useState } from "react";
import Axios from 'axios';
import { useEffect } from "react";

export default function Perfil(){
    const [nick, setNick] = useState([]);
    const [perfilPosts, setPerfilPosts] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/user/getInformations", {
            getUser : localStorage.getItem("username")
        }).then((res) => {
        setNick(res.data.nickname);
        }
    )});

    useEffect(() => {
        Axios.post("http://localhost:8080/upload/perfilPost", {
            username: localStorage.getItem("username")
        }).then((res) => {
        setPerfilPosts(res.data);
        })});

    const DUMMY_DATA = [
        {
          id: "m1",
          user: "Rafla",
          user_image:
            " http://localhost:3000/artroom-react/static/media/chirio.90c6d6f99ced9fb94811.jpg ",
          title: "Artie",
          image: "https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=2000",
          description: "eu adoro o artie",
          type: "image",
        },
        {
            id: "m2",
            user: "Rafla",
            user_image:
              " http://localhost:3000/artroom-react/static/media/chirio.90c6d6f99ced9fb94811.jpg ",
            title: "Artie",
            image: "https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=2000",
            description: "eu adoro o artie",
            type: "image",
        },
      ];

return(
<div className={classes.background}>
    <MainNavigation/>
    
    <div>

        <div className={classes.cardContainer}>
            <div className={classes.top}>

                <div className={classes.imgHeader}>
                    <label htmlFor="file-input">
                    <img src={chirio} />
                    </label>
                    <input id="file-input" type="file" />
                </div>

            </div>
        </div>


    </div>

    <div className={classes.bottom}>
        <div className={classes.bio}>
        <h3 className={classes.textoBranco}>{nick}</h3>
        <h4 className={classes.textoBranco} >Designer Digital</h4>
        <p className={classes.textoRosa}>Gosto muito de pintura digital e estou começando <br/> agr em 3D, me desejem sorte! ^^ </p>
        <a className={classes.btn}>Chat</a>
        </div>

    <PostsLists postsImages={perfilPosts}/>

    </div>
</div>
)
}