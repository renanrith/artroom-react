import Post from "../../ui/posts";
import classes from "./posts_imagem.module.css";
import comment_icon from "../../../imagens/posts/comment_icon.png";
import heart_icon from "../../../imagens/posts/heart_icon.png";
import heart_icon_red from "../../../imagens/posts/heart_icon_red.png";
import ReactAudioPlayer from "react-audio-player";
import ComentLists from "../../layout/comentario/comentList";
import Axios from "axios";
import { useState } from "react";
import MakeComent from "../../layout/comentario/MakeComent/makeComent";
import ReactPlayer from 'react-player'


const blank_like = heart_icon;
const clicked_like = heart_icon_red;
const likes = { blank_like, clicked_like };

export default function PostImage(props) {
  const [selected, setSelected] = useState(likes.blank_like);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);

  Axios.post("http://localhost:8080/upload/comments").then((res) => {
    setComments(res.data);
  });

  if (props.type === "image") {
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

          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>

          <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setSelected(!selected)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}
            </button>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setShowComments(!showComments)}
            >
              <img
                className={classes.icon}
                src={comment_icon}
                alt="Comentarios"
              />
            </button>
            {showComments ? null : (
              <>
                <MakeComent />
                <ComentLists comments={comments.reverse()} />
              </>
            )}
          </div>
        </Post>
      </li>
    );
  } else if (props.type === "text" || props.type === "") {
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
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setSelected(!selected)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}
            </button>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setShowComments(!showComments)}
            >
              <img
                className={classes.icon}
                src={comment_icon}
                alt="Comentarios"
              />
            </button>
            {showComments ? null : (
              <>
                <MakeComent />
                <ComentLists comments={comments.reverse()} />
              </>
            )}
          </div>
        </Post>
      </li>
    );
  } else if (props.type === "audio") {
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
          <div className={classes.audio}>
          <ReactPlayer url="https://soundcloud.com/xaybur/a-harbinger-arrives" wrapper={classes.audio} />
          </div>
          <div className={classes.actions}>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setSelected(!selected)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}
            </button>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setShowComments(!showComments)}
            >
              <img
                className={classes.icon}
                src={comment_icon}
                alt="Comentarios"
              />
            </button>
            {showComments ? null : (
              <>
                <MakeComent />
                <ComentLists comments={comments.reverse()} />
              </>
            )}
          </div>
        </Post>
      </li>
    );
  }
  else if (props.type === "video") {
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
          <div className={classes.video}>
            <ReactPlayer controls="true" url={props.video} wrapper={classes.video} />
          </div>
          <div className={classes.actions}>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setSelected(!selected)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}
            </button>
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => setShowComments(!showComments)}
            >
              <img
                className={classes.icon}
                src={comment_icon}
                alt="Comentarios"
              />
            </button>
            {showComments ? null : (
              <>
                <MakeComent />
                <ComentLists comments={comments.reverse()} />
              </>
            )}
          </div>
        </Post>
      </li>
    );
  }
}
