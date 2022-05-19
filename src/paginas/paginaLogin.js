import classes from "./paginaLogin.css";
import logo_sem_titulo from "../imagens/MainNavigation/logo.svg";
import { Link } from "react-router-dom";

export default function  PaginaLogin(){
    return (
        <div className={classes.wrapper}>
        <header className={classes.header}>
        <div className={classes.cadastro}>
            <Link to="/home"> <button > Cadastre-se </button> </Link>
        </div>
      </header>

        <div className={classes.login}>
            <img src={logo_sem_titulo} alt='ArtRoom Logo'/> <br/>
            Seja bem vindo!!
            <form>
            <input type="text" name="username" id="username" placeholder="Username / Email"/> <br/>
            <input type="password" name="password" id="password" placeholder="Senha"/> <br/>
            <a href="index.html"> <input type="button" value="Logar" className={classes.button}/> </a> <br/>
            <a href="index.html"> <button className={classes.cadastro}> Cadastre-se </button> </a>
            </form>
            <p id="subtext"> Ao continuar, você concorda com os <a href="https://www.youtube.com/watch?v=o-V643L37QQ&t=621s"> termos de serviços </a> do ArtRoom e confirma que leu nossa politica de privacidade e uso de cookies  </p>
        </div>
    </div>
    )
}