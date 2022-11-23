import MainNavigation from "../components/layout/MainNavigation";
import "./marketPlace.css";
import chirio from "..//imagens//imgperfil//chirio.jpg";
import Backdrop from "../components/layout/post/backdrop";

import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import MarketList from "../components/marketPlace/marketList";
import MarketPageList from "../components/marketPlace/marketPageList";
import KeyCreate from "../components/marketPlace/key/keyCreatre";
import UploadPopUp from "../components/marketPlace/upload/uploadPopUp";

const dummyData = [
  {
    id: "m1",
    user: "Renan",
    user_image: "https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg",
    title: "vendo",
    image: "https://pbs.twimg.com/media/FdSVEWjXgAAfwYU?format=jpg&name=medium",
    description: "gato",
    preco: "100,00",
  },
  {
    id: "m1",
    user: "Renan",
    user_image: "https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg",
    title: "vendo",
    image: "https://pbs.twimg.com/media/FdSVEWjXgAAfwYU?format=jpg&name=medium",
    description: "gato",
    preco: "100,00",
  },
  {
    id: "m1",
    user: "Renan",
    user_image: "https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg",
    title: "vendo",
    image: "https://pbs.twimg.com/media/FdSVEWjXgAAfwYU?format=jpg&name=medium",
    description: "gato",
    preco: "100,00",
  },
  {
    id: "m1",
    user: "Renan",
    user_image: "https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg",
    title: "vendo",
    image: "https://pbs.twimg.com/media/FdSVEWjXgAAfwYU?format=jpg&name=medium",
    description: "e o gato gato e o gato gato e o gato gato e o gato gato e o gato gato ",
    preco: "100,00",
  },
  {
    id: "m1",
    user: "Renan",
    user_image: "https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg",
    title: "chapeu",
    image: "https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    description: "e o chapeu",
    preco: "100,00",
  }
]

export default function MarketPlace() {
  const [nick, setNick] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [keyIsOpen, setKeyIsOpen] = useState(false);
  const [upIsOpen, setUpIsOpen] = useState(false);

  function keyHandler(){
    setKeyIsOpen(true);
  }

  function CloseKeyHandler() {
    setKeyIsOpen(false);
  }

  function UploadHandler() {
    setUpIsOpen(true);
  }

  function CloseUploadHandler() {
    setUpIsOpen(false);
  }


  function PostHandler() {
    setModalIsOpen(true);
  }

  function ClosePostHandler() {
    setModalIsOpen(false);
  }


  useEffect(() => {
    Axios.post("http://localhost:8080/user/getInformations", {
      getUser: localStorage.getItem("username"),
    }).then((res) => {
      setNick(res.data.nickname);
    });
  });

  return (
    <>
      <MainNavigation />
      <div className="main">
        <div className="lateral">
          <div class="imagem">
            <Link to="/perfil">
              {" "}
              <img src={chirio} />{" "}
            </Link>
          </div>
          <h2> {nick} </h2>

          <button onClick={keyHandler} className="btn"> Criar Chave de Compras </button>
          {keyIsOpen && <KeyCreate/>}
          {keyIsOpen && <Backdrop onClick={CloseKeyHandler} />}
          <button onClick={UploadHandler} className="btn"> Upload </button>
          {upIsOpen && <UploadPopUp/>}
          {upIsOpen && <Backdrop onClick={CloseUploadHandler} />}
          

          <div className="baixo">
            <Link to="/home">
              <a className="btn">retornar</a>
            </Link>
          </div>
        </div>

        <div className="center">
          <h2>Bem-vinde ao MarketPlace!</h2>
          <MarketList marketItems={dummyData} onClick={PostHandler}/> 
          {modalIsOpen && <MarketPageList marketItem={dummyData}/>}
          {modalIsOpen && <Backdrop onClick={ClosePostHandler} />}
        </div>
       
      </div>
    </>
  );
}
