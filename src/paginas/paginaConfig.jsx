import MainNavigation from "../components/layout/MainNavigation";
import classes from "./paginaConfig.module.css";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../supabase/supabaseClient";
import Axios from "axios";


export default function PaginaConfig() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  });

  const logout = () => {
    if (localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
      localStorage.clear();
      navigate("/");
    }
  };

  const [nick, setNick] = useState([]);
  const [username, setUsername] = useState([])
  const [perfilPosts, setPerfilPosts] = useState([]);
  const [perfilImage, setPerfilImage] = useState([]);

  const fileInput = useRef(null);

  const deletar = () => {
    Axios.post("http://localhost:8080/user/deleteAccount", {
      user: localStorage.getItem("username"),
    });
    
    localStorage.clear();
    navigate("/");
  }

  async function handleFile(file){
    
    const fileExt = file.type.split('.')[1];
    const fileName = `${Date.now()}.${fileExt}.png`;
    const { data, error } = await supabase.storage
    .from('images')
    .upload(`pfp/${fileName}`, file);

    const { data: publicURL, error: error2 } = await supabase
    .storage
    .from('images')
    .getPublicUrl(`pfp/${fileName}`);

    Axios.post("http://localhost:8080/user/pfp", {
      pfp: publicURL.publicURL,
      username: localStorage.getItem("username")
  });
  console.log(publicURL.publicURL)
};

  useEffect(() => {
    Axios.post("http://localhost:8080/user/getInformations", {
      getUser: localStorage.getItem("username"),
    }).then((res) => {
      setNick(res.data.nickname);
      setUsername(res.data.usuario)
      setPerfilImage(res.data.userImage);
    });
  });

  useEffect(() => {
    Axios.post("http://localhost:8080/upload/perfilPost", {
      username: localStorage.getItem("username"),
    }).then((res) => {
      setPerfilPosts(res.data.reverse());
    });
  });

  return (
    <div>
      <MainNavigation/>
      <div className={classes.main}>
      

      <h1> Informações da Conta </h1>
      <p> Nome: {nick} </p>
      <p> Nickname: {username} </p>
      <p> Foto: </p>
      <div className={classes.imgHeader}>
              <label htmlFor="file-input">
                <img src={perfilImage} />
              </label>
              <input id="file-input" type="file" accept=".png,.jpeg,.jpg,.webp" ref={fileInput} onChange={(e) => { handleFile(e.target.files[0]) }}/>
            </div>
      <br></br>
      <button className={classes.makePost} onClick={logout}>
              LOGOUT
      </button>
      <button className={classes.makePost} onClick={deletar}>
              Deletar Conta
      </button>

      </div>
    </div>
  );
}