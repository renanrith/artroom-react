import "./perfilcss.css"
import chirio from "./../imagens/imgperfil/chirio.jpg";
import bell_icon from "../imagens/MainNavigation/bell_icon.png";
import profile_icon from "../imagens/MainNavigation/profile_icon.png";
import Marketplace_Icon from "../imagens/MainNavigation/Marketplace_Icon.png";
import logo_sem_titulo from "../imagens/MainNavigation/logo_sem_titulo.svg";
import art3 from "./../imagens/imgperfil/artie3.jpg"
import art7 from "./../imagens/imgperfil/artie7.jpg"
import { Link } from "react-router-dom";

export default function Perfil(){

return(
<body>

    <header>
        <div class="icons">
            <img className="icone" src={bell_icon} alt="notifications"/>
            <img className="icone" src={profile_icon} alt="perfil"/>
            <img className="icone" src={Marketplace_Icon} alt="marketplace"/>
        </div>

        <div class="direita">
            <input type="text" />
            <Link to="/home">
            <img class="iconeart" src={logo_sem_titulo} alt="iconeart"/>
            </Link>
        </div>


    </header>

    <div>

        <div class="card-container">
            <div class="top">

                <div class="img-header">
                    <img src={chirio}/>
                </div>

            </div>
        </div>


    </div>

    <div class="lateral-meio bottom">
        <h3>Rafaela</h3>
        <h4>Designer Digital</h4>
        <p>Gosto muito de pintura digital e estou começando <br/> agr em 3D, me desejem sorte! ^^ </p>
        <a href="#" class="btn">Chat</a>

        <div class="posts">
            <div class="post">
                <h5> rafaela oi</h5>
                <img src={art3}/>
                <h5> eu adoro o artie</h5>
                
            </div>

            <div class="post">
                <h5> rafaela oi</h5>
                <img src={art7}/>
                <h5> eu adoro o artie</h5>
            </div>
        </div>

    </div>


    <footer>




    </footer>

</body>
)
}