import Post from "../../ui/posts";
import classes from "./postsAudio.module.css";
import comment_icon from "../../../imagens/posts/comment_icon.png";
import heart_icon from "../../../imagens/posts/heart_icon.png";
import heart_icon_red from "../../../imagens/posts/heart_icon_red.png";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

const blank_like = heart_icon;
const clicked_like = heart_icon_red;
const likes = { blank_like, clicked_like };

export default function PostAudio(props) {
  const [selected, setSelected] = useState(likes.blank_like);
  return (
    <li className={classes.item}>
      <Post>
        {/* User */}
        <div className={classes.user}>
          <img
            draggable="false"
            className={classes.userImage}
            alt={props.user}
            src={props.userImage}
          />
          <h3 className={classes.user}>{props.user}</h3>
        </div>
        {/* Post */}
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.image}>
          <ReactAudioPlayer
            src="my_audio_file.ogg"
            className={classes.audio}
            autoPlay
            controls
          />
        </div>
        <div className={classes.actions}>
          <button onClick={() => setSelected(!selected)}>
            {selected ? (
              <img
                draggable="false"
                className={classes.icon}
                src={blank_like}
                alt="Like"
              />
            ) : (
              <img
                draggable="false"
                className={classes.icon}
                src={clicked_like}
                alt="Like"
              />
            )}
          </button>
          <button>
            <img
              draggable="false"
              className={classes.icon}
              src={comment_icon}
              alt="Comentarios"
            />
          </button>
        </div>
      </Post>
    </li>
  );
}
