import classes from "./makeComent.module.css";
import Axios from 'axios';
import { useState } from 'react';

export default function MakeComent(props) {
  const [comment, setComment] = useState([]);

  const handleSubmit = () => {
    Axios.post("http://localhost:8080/upload/insertComments", {
      id: 1,
      comentario: comment,
      user: localStorage.getItem("username")
    })
    window.location.reload()
  };

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
          onChange={(e) => { setComment(e.target.value)}}
        />
        <button className={classes.post} onClick={handleSubmit}>Comentar</button>
      </div>
    </div>
  );
}
