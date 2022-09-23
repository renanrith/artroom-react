import MainNavigation from "../components/layout/MainNavigation";
import "./marketPlace.css";
import chirio from "..//imagens//imgperfil//chirio.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import MarketList from "../components/marketPlace/marketList";

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
    }
]

export default function MarketPlace() {
  const [nick, setNick] = useState([]);

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

          <a className="btn"> Criar Chave de Compras </a>
          <a className="btn">Atualizar Chave de Compras</a>

          <div className="baixo">
            <a className="btn">retornar</a>
          </div>
        </div>

        <div className="center">
          <h2>Bem-vinde ao MarketPlace!</h2>
          <MarketList marketItems={dummyData}/> 
        </div>
      </div>
    </>
  );
}
