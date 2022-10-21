import Axios from "axios";
import { useState } from "react";
import Backdrop from "../post/backdrop";
import CadastroButton from "./cadastroButton";
import classes from "./cadastroPopUp.module.css";

export default function CadastroPopup(props) {
  const [cadNickname, setNickname] = useState("");
  const [cadUsername, setCadUsername] = useState("");
  const [cadEmail, setCadEmail] = useState("");
  const [cadPassword, setCadPassword] = useState("");
  const [cadConfirm, setCadConfirm] = useState("");
  const [cadError, setCadError] = useState("");

  let cadErrorMessage;

function registrar(props){
    if (!cadNickname || !cadUsername || !cadEmail || !cadPassword || !cadConfirm) {
      cadError = "Preencha todos os campos";
    } else {    
      Axios.post("http://localhost:8080/user/registrar", {
        cadNickname: cadNickname,
        cadUsername: cadUsername,
        cadEmail: cadEmail,
        cadPassword: cadPassword,
        cadConfirm: cadConfirm,
      }
      ).then(res => {
      console.log(res);
      setCadError(res.data.cadError);
    });

    }
    
  };

  return (
    <div className={classes.fundo}>
      <h1>Bem vindo(a) ao ArtRoom!</h1>
      <h3> Vamos começar a nossa história? </h3>
      <div className={classes.field}>
        <input
          type="text"
          name="cadNickname"
          className={classes.dados}
          placeholder="Nome Completo"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="text"
          name="cadUsername"
          className={classes.dados}
          placeholder="Usuário"
          onChange={(e) => {
            setCadUsername(e.target.value);
          }}
        />
        <br />
      </div>
      <br />
      <div className={classes.field}>
        <input
          type="email"
          name="cadEmail"
          className={classes.dados}
          placeholder="E-mail"
          onChange={(e) => {
            setCadEmail(e.target.value);
          }}
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="password"
          name="cadPassword"
          className={classes.dados}
          placeholder="Senha"
          onChange={(e) => {
            setCadPassword(e.target.value);
          }}
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="password"
          name="passwordConfirm"
          className={classes.dados}
          placeholder="Confirmação de senha"
          onChange={(e) => {
            setCadConfirm(e.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <h2 style={{ color: "red" }}>{cadErrorMessage} </h2>
        <h2 style={{ color: "#ff73e8" }}>{cadError} </h2>
        <button onClick={registrar}>Cadastre-se</button>
        <br />
      </div>
    </div>
  )
  };
