import classes from "./cadastroPopUp.module.css";

export default function CadastroPopup() {
  return (
    <div className={classes.fundo}>
      <h1>Bem vindo(a) ao ArtRoom!</h1>
      <h3> Vamos começar a nossa história? </h3>
      <div className={classes.field}>
        <input
          type="text"
          name="nome"
          className={classes.dados}
          placeholder="Nome Completo"
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="text"
          name="username"
          className={classes.dados}
          placeholder="Usuário"
        />
        <br />
      </div>
      <br />
      <div className={classes.field}>
        <input
          type="text"
          name="email"
          className={classes.dados}
          placeholder="E-mail"
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="password"
          name="password"
          className={classes.dados}
          placeholder="Senha"
        />
        <br />
      </div>
      <div className={classes.field}>
        <input
          type="password"
          name="passwordConfirm"
          className={classes.dados}
          placeholder="Confirmação de senha"
        />
        <br />
      </div>
      <div>
        <button>Cadastre-se</button>
        <br />
      </div>
    </div>
  );
}
