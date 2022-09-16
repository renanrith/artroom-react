import Coment from "./comentario";
import classes from "./comentList.module.css";

export default function ComentLists(props) {
  return (
    <ul className={classes.list}>
      {props.comments.map((comments) => {
        return (
          <div key={comments.id}>
            <Coment
              
              idComent={comments.idComent}
              user={comments.user}
              userImage={comments.user_image}
              texto={comments.texto}
              postID={comments.postID}
            />
          </div>
        );
      })}
    </ul>
  );
}
