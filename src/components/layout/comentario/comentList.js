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
              texto={comments.texto}
              userImage={comments.userImage}
              postID={comments.postID}
            />
          </div>
        );
      })}
    </ul>
  );
}
