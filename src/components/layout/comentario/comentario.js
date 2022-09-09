import Post from "../../ui/posts";
import classes from "./comentario.module.css";

export default function Coment(props) {
  return (
    <li className={classes.item}>
      <Post>
        {/* User */}
        <div className={classes.user}>
          <img
            className={classes.userImage}
            alt={props.user}
            src={props.userImage}
          />
          <h3 className={classes.user}>{props.user}</h3>
          {/* Post */}
        </div>
        <div className={classes.content}>
          <p>{props.texto}</p>
        </div>
        <div className={classes.actions}></div>
      </Post>
    </li>
  );
}
