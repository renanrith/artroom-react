import classes from "./makeComent.module.css";
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import PostImage from "../../../posts/postImagem/posts_imagem";
import { CommentContext } from "../../../../contexto/comment";
import { useNavigate } from "react-router-dom";

export default function MakeComent(props) {
  const [comment, setComment] = useState([]);
  const {postId: id} = useContext(CommentContext)
  const [userImage, setUserImage] = useState([]);
  
  const navigate = useNavigate();

  useEffect (() => {
    
    Axios.post("http://localhost:8080/user/getInformations", {
      getUser: localStorage.getItem("username")
    }).then((res) => {
      setUserImage(res.data.userImage);
    });

  }, []);

  const handleSubmit = () => {

    Axios.post("http://localhost:8080/upload/insertComments", {
      id,
      comentario: comment,
      user: localStorage.getItem("username"),
      userImage: userImage
    });
    navigate("/")
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
