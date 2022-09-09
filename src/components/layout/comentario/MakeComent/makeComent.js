import classes from "./makeComent.module.css";

export default function MakeComent(props) {
  return (
    <div>
      <div className={classes.fundo}>
        <textarea
          className={classes.comentario}
          type="text"
          name="Descricao"
          id="Descricao"
          placeholder="Escreva seu comentário"
          autoComplete="off"
          autoCapitalize="On"
        />
        <button className={classes.post}>Comentar</button>
      </div>
    </div>
  );
}
