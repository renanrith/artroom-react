import Post from "../../ui/posts";
import classes from "./posts_imagem.module.css";
import comment_icon from "../../../imagens/posts/comment_icon.png";
import heart_icon from "../../../imagens/posts/heart_icon.png";
import heart_icon_red from "../../../imagens/posts/heart_icon_red.png";
import ComentLists from "../../layout/comentario/comentList";
import Axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import MakeComent from "../../layout/comentario/MakeComent/makeComent";
import ReactPlayer from 'react-player'
import { AiOutlineSafety } from "react-icons/ai";
import { CommentContext } from "../../../contexto/comment";

const blank_like = heart_icon;
const clicked_like = heart_icon_red;
const likes = { blank_like, clicked_like };

export default function PostImage(props) {

  const ref = useRef(null);

  const [selected, setSelected] = useState(likes.blank_like);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  const [uploads, setUploads] = useState([]);
  const {setPostId} = useContext(CommentContext);


  useEffect(() => { Axios.get("http://localhost:8080/upload/posts").then((res) => {
    setUploads(res.data);
  })}, []);


  const handleComment = (id) => {
    const postID = id;
    setPostId(postID)
    setShowComments(!showComments)
    Axios.post("http://localhost:8080/upload/showComments", {
      id: postID
    }).then((res) => {
      setComments(res.data.reverse());
    })
  };

  const handleLike = (id) => {
    var postid = id - 1;

    var tempLikes = uploads;
    tempLikes[postid].likes = tempLikes[postid].likes + 1;

    Axios.post("http://localhost:8080/upload/like", {
      user: localStorage.getItem("username"),
      id: id
    })
    setSelected(!selected);
    console.log(tempLikes[postid].likes)
  };


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
              ref={ref}
              className={classes.interact}
              id={props.id}
              onClick={() => handleLike(props.id)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
                
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}


              
            </button>
            {props.likes}
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => handleComment(props.id)}
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
                <ComentLists comments={comments} />
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
              ref={ref}
              className={classes.interact}
              id={props.id}
              onClick={() => handleLike(props.id)}
            >
              {selected ? (
                <img className={classes.icon} src={blank_like} alt="Like" />
              ) : (
                <img className={classes.icon} src={clicked_like} alt="Like" />
              )}

            </button>
            {props.likes}
            <button
              className={classes.interact}
              id={props.id}
              onClick={() => handleComment(props.id)}
            >
              <img
                className={classes.icon}
                src={comment_icon}
                alt="Comentarios"
              />
            </button>
            {showComments ? null : (
              <>
                <MakeComent id={props.id} />
                <ComentLists comments={comments} />
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
              ref={ref}
              className={classes.interact}
              id={props.id}
              onClick={() => handleLike}
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
              onClick={() => handleComment(props.id)}
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
                <ComentLists comments={comments} />
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
              ref={ref}
              className={classes.interact}
              id={props.id}
              onClick={() => handleLike(  )}
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
              onClick={() => handleComment(props.id)}
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
                <ComentLists comments={comments} />
              </>
            )}
          </div>
        </Post>
      </li>
    );
  }
}
