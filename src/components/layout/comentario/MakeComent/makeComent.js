import classes from "./makeComent.module.css";
import Axios from 'axios';
import { useContext, useState } from 'react';
import PostImage from "../../../posts/postImagem/posts_imagem";
import { CommentContext } from "../../../../contexto/comment";

export default function MakeComent(props) {
  const [comment, setComment] = useState([]);
  const {postId: id} = useContext(CommentContext)

  const handleSubmit = () => {
    Axios.post("http://localhost:8080/upload/insertComments", {
      id,
      comentario: comment,
      user: localStorage.getItem("username")
    })
    window.location.reload()
  };
  return (
  <>
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
  </>
  );
}
