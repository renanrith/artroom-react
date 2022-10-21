import classes from "./Make_post.module.css";
import { useState } from "react";
import PostPopup from "./post/modal";
import Backdrop from "./post/backdrop";

export default function MakePosts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function PostHandler() {
    setModalIsOpen(true);
  }

  function ClosePostHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button className={classes.makePost} onClick={PostHandler}>
        + Novo Post
      </button>
      {modalIsOpen && <PostPopup />}
      {modalIsOpen && <Backdrop onClick={ClosePostHandler}/>}
    </div>
  );
}
