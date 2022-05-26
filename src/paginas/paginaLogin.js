import logo_sem_titulo from "../imagens/MainNavigation/logo.svg";
import { Link } from "react-router-dom";
import "./paginaLogin.css";

export default function  PaginaLogin(){
    return (
        <div style = {{height:"100vh"}} className="ola">
        <div className="wrapper">
        <div className="header">
        <div className="cadastro">
            <Link to="/home"> <button > Cadastre-se </button> </Link>
        </div>
      </div>

        <div className="login">
            <img draggable="false" src={logo_sem_titulo} alt='ArtRoom Logo'/> <br/>
            Seja bem vindo!!
            <form>
            <input type="text" name="username" id="username" placeholder="Username / Email"/> <br/>
            <input type="password" name="password" id="password" placeholder="Senha"/> <br/>
            <Link to="/home"> <input type="button" value="Logar" className="button"/> </Link> <br/>
            <Link to="/home"> <button className="cadastro"> Cadastre-se </button> </Link>
            </form>
            <p id="subtext"> Ao continuar, você concorda com os <a href="https://www.youtube.com/watch?v=o-V643L37QQ&t=621s"> termos de serviços </a> do ArtRoom e confirma que leu nossa politica de privacidade e uso de cookies  </p>
        </div>
    </div>
    </div>
    )
}