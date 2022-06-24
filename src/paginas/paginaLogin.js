import React, { useState, useContext } from "react";
import { AuthContext } from "../contexto/auth";
import logo_sem_titulo from "../imagens/MainNavigation/logo.svg";
import { Link } from "react-router-dom";
import "./paginaLogin.css";

const PaginaLogin = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email , password });
        login(email, password) // integração com o contexto / api
    };

    return (
        <div style={{ height: "100vh" }} className="ola">
            <div className="wrapper">
                <div className="header">
                    <div className="cadastro">
                        <Link to="/home"> <button > Cadastre-se </button> </Link>
                    </div>
                </div>
                <div className="login">
                    <img draggable="false" src={logo_sem_titulo} alt='ArtRoom Logo' /> <br />
                    Seja bem vindo!!
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input type="text"
                                name="username"
                                id="username"
                                placeholder="Username / Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value)}} /><br />
                        </div>
                        <div className="field">
                            <input type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Senha" 
                                value={password}
                                onChange={(e) => { setPassword(e.target.value)}}/> <br />
                        </div>
                        <div className="field">
                            <input type="submit" value="Logar" className="submit" /><br />
                        </div>
                    </form>
                    <p id="subtext"> Ao continuar, você concorda com os <a href="https://www.youtube.com/watch?v=o-V643L37QQ&t=621s"> termos de serviços </a> do ArtRoom e confirma que leu nossa politica de privacidade e uso de cookies  </p>
                </div>
            </div>
        </div>
    );
};

export default PaginaLogin;