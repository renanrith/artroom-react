import Coment from "./comentario";
import classes from "./comentList.module.css";
import PostImage from "../../posts/postImagem/posts_imagem";
import { useState } from "react";

export default function ComentLists(props) {

  return (
    <ul className={classes.list}>
      {props.comments.map((comments) => {
        return (
        <div>
        <Coment
          key={comments.id}
          idComent={comments.idComent}
          user={comments.user}
          userImage={comments.user_image}
          description={comments.description}
        /> 
        </div>
      )})
       }
    </ul>
    );
  }


