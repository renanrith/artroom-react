import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import MainNavigation from "../components/layout/MainNavigation";
import MakePosts from "../components/layout/Make_post";
import classes from "../components/layout/Make_post.module.css";
import PostsAudioList from "../components/posts/postAudio/postAudioList";
import PostsLists from "../components/posts/postImagem/posts_list";
import PostsListsRec from "../components/posts/postImagem/recomended/posts_listRec";
import "./paginainicial.css";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Post 1",
    description: 'oi',
    user: "bryan",
    type: "text"
  },
  {
    id: "m1",
    user: "Renan",
    user_image:
      " https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg ",
    title: "Olha que legal",
    image: "https://i.imgur.com/dEsSnPK.png",
    description: "Muito legal né",
    type: "image",
  },
  {
    id: "m2",
    user: "Leonardo DaVinci",
    user_image:
      "https://www.cartacapital.com.br/wp-content/uploads/2019/02/Kombo-Leonardo-Da-Vinci-und-Leonardo-di-Caprio.jpg",
    title: "The Ballad of Mona Lisa",
    image:
      " https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg ",

    description:
      "Mona Lisa, yeah Pleased to please you Mona Lisa",
      type: "image",
  },
  {
    id: "m3",
    user: "dabin ",
    user_image:
      "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/03/trollface-origem-significado-e-polemicas-em-torno-do-meme-960x596.jpg",
    title: "peter griffin sans",
    image: " https://i.ytimg.com/vi/QhbNw2YHDw0/maxresdefault.jpg ",
    description: "socorro", 
    type: "image",
  },
  {
  id: "m4",
  user: "renan",
  user_image:
      " https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg ",
  title: "oi gente",
  description: "sera que funcionou",
  type: "text",
  },
  {
    id: "m5",
    user: "xaybur",
    user_image:
        " https://i1.sndcdn.com/avatars-zFydfsGVr4u5cr1y-hWwYxw-original.jpg ",
    title: "A Harbinger Arrives",
    description: "xaybur no beat",
    audio: "https://soundcloud.com/xaybur/a-harbinger-arrives",
    type: "audio",
    }
  

];

const RECOMENDED_POST = [
  {
    id: "m4",
    user: "fioblah",
    user_image:
      " https://64.media.tumblr.com/2d5cedab91a38d6b72e8bce6e3ca9187/a5fcf15089dc9d83-2b/s64x64u_c1/7ae26f5e7c311b9aeed44074a15c6c2fc25bfe40.jpg ",
    title: "Its his Day",
    image:
      "https://64.media.tumblr.com/d80165f0cb09bf7b36617b4546f4cd07/20ff58da800c4a27-81/s1280x1920/f78b98bb82739de82812fb5752150af1c4a4bedb.pnj",
    description: "it’s his day",
  },
];

export default function PaginaInicial() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  });

    useEffect (() => {
    Axios.get("http://localhost:8080/upload/posts").then((res) => {
      setPosts(res.data);
    }
  );
  }
  , []);

  const bosta = () => {
    if (localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="body">
      <MainNavigation />
      <main>
        <div className="posts">
          { <PostsLists postsImages={posts.reverse()} /> /* mudar o dummy data  */}
        </div>
        <div className="side">
          <div className="make_post">
            <MakePosts /> <br />
          </div>

          <div className="recomended">
            <PostsListsRec postsImages={RECOMENDED_POST} />
            <button className={classes.makePost} onClick={bosta}>
              LOGOUT
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
