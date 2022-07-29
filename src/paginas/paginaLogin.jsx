import React, { useState, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../contexto/auth";
import logo_sem_titulo from "../imagens/MainNavigation/logo.svg";
import { Link, Navigate } from "react-router-dom";
import "./paginaLogin.css";
import{ useNavigate } from 'react-router-dom';
import CadastroButton from "../components/layout/cadastro/cadastroButton";


const PaginaLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const Login = () => {
        Axios.post("http://localhost:8080/user/logar", {
            username: username,
            password: password
        }).then((response) => {
            if(response.data.loggedIn){
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", response.data.username);
            } else {
                setErrorMessage(response.data.message);
            }
        });

    };
    return (
        <div style={{ height: "100vh" }} className="ola">
            <div className="wrapper">
                <div className="header">
                    <div className="cadastro">
                        <CadastroButton/>
                    </div>
                </div>
                <div className="login">
                    <img draggable="false" src={logo_sem_titulo} alt='ArtRoom Logo' /> <br />
                    Seja bem vindo!!
                        <div className="field">
                            <input type="text"
                                name="username"
                                id="username"
                                placeholder="Username / Email"
                                onChange={(e) => { setUsername(e.target.value)}} /><br />
                        </div>
                        <div className="field">
                            <input type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Senha" 
                                onChange={(e) => { setPassword(e.target.value)}}/> <br />
                        </div>
                        <div className="field">
                            <button onClick={Login}>Login</button><br/>
                            <h6 style={{ color: "red" }}>{errorMessage} </h6>
                        </div>
                    <p id="subtext"> Ao continuar, você concorda com os <a href="https://www.youtube.com/watch?v=o-V643L37QQ&t=621s"> termos de serviços </a> do ArtRoom e confirma que leu nossa politica de privacidade e uso de cookies  </p>
                </div>
            </div>
        </div>
    );
};

export default PaginaLogin;