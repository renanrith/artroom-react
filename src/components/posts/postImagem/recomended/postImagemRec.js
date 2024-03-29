import Post from "../../../ui/posts";
import classes from "./postimageRec.module.css";
import comment_icon from "../../../../imagens/posts/comment_icon.png";
import heart_icon from "../../../../imagens/posts/heart_icon.png";
import heart_icon_red from "../../../../imagens/posts/heart_icon_red.png";
import { useState } from "react";

const blank_like = heart_icon;
const clicked_like = heart_icon_red;
const likes = { blank_like, clicked_like };

export default function PostImageRec(props) {
  const [selected, setSelected] = useState(likes.blank_like);
  return (
    <li className={classes.item}>
      <Post>
        {/* User */}
        <div className={classes.user}>
          <img draggable="false" className={classes.userImage} alt={props.user} src={props.userImage} />
          <h3 className={classes.user}>

            {props.user}
          </h3>
          {/* Post */}
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
        </div>
      </Post>
    </li>
  );
}
