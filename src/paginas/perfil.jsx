import classes from "./perfilcss.module.css"
import chirio from "./../imagens/imgperfil/chirio.jpg";
import bell_icon from "../imagens/MainNavigation/bell_icon.png";
import profile_icon from "../imagens/MainNavigation/profile_icon.png";
import Marketplace_Icon from "../imagens/MainNavigation/Marketplace_Icon.png";
import logo_sem_titulo from "../imagens/MainNavigation/logo_sem_titulo.svg";
import art3 from "./../imagens/imgperfil/artie3.jpg"
import art7 from "./../imagens/imgperfil/artie7.jpg"
import { Link } from "react-router-dom";
import PostsAudioList from "../components/posts/postAudio/postAudioList";
import PostsLists from "../components/posts/postImagem/posts_list";

export default function Perfil(){


    const DUMMY_DATA = [
        {
          id: "m1",
          user: "Rafla",
          user_image:
            " http://localhost:3000/artroom-react/static/media/chirio.90c6d6f99ced9fb94811.jpg ",
          title: "Artie",
          image: "https://pbs.twimg.com/media/FWCu0t7X0AAb6ID?format=jpg&name=large",
          description: "eu adoro o artie",
        },
        {
            id: "m2",
            user: "Rafla",
            user_image:
              " http://localhost:3000/artroom-react/static/media/chirio.90c6d6f99ced9fb94811.jpg ",
            title: "Artie",
            image: "https://pbs.twimg.com/media/FWCvYzSWAAERs6S?format=jpg&name=4096x4096",
            description: "eu adoro o artie",
        },
      ];

return(
<div>
    <header>
        <div className={classes.icons}>
            <img className={classes.icone} src={bell_icon} alt="notifications"/>
            <img className={classes.icone} src={profile_icon} alt="perfil"/>
            <img className={classes.icone} src={Marketplace_Icon} alt="marketplace"/>
        </div>

        <div className={classes.direita}>
            <input type="text" />
            <Link to="/home">
            <img className={classes.iconeart} src={logo_sem_titulo} alt="iconeart"/>
            </Link>
        </div>


    </header>

    <div>

        <div className={classes.cardContainer}>
            <div className={classes.top}>

                <div className={classes.imgHeader}>
                    <img src={chirio}/>
                </div>

            </div>
        </div>


    </div>

    <div className={classes.bottom}>
        <div className={classes.bio}>
        <h3>Rafaela</h3>
        <h4>Designer Digital</h4>
        <p>Gosto muito de pintura digital e estou começando <br/> agr em 3D, me desejem sorte! ^^ </p>
        <a className={classes.btn}>Chat</a>
        </div>
    <PostsLists postsImages={DUMMY_DATA}/>

    </div>
</div>
)
}