import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import bell_icon from "../../imagens/MainNavigation/bell_icon.png";
import profile_icon from "../../imagens/MainNavigation/profile_icon.png";
import Marketplace_Icon from "../../imagens/MainNavigation/Marketplace_Icon.png";
import logo_sem_titulo from "../../imagens/MainNavigation/logo_sem_titulo.svg";
import Names from "./MOCK_DATA.json";
import BarraPesquisa from "./searchBar.js";
import { BsFillGearFill } from "react-icons/bs";

import classes from "./MainNavigation.module.css";
import ResponsiveMenu from "./responsiveMenu";

function MainNavigation() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const logo = () => {
    navigate("/home");
  };

  return (
    <div className={classes.header_container}>
      <header>
        <ResponsiveMenu />

        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <img
                  draggable="false"
                  src={bell_icon}
                  alt="Bell Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/configuration">
                {" "}
                <BsFillGearFill color="white" size={20} className={classes.iconconf}/>
                {" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/perfil">
                {" "}
                <img
                  draggable="false"
                  src={profile_icon}
                  alt="Profile Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/marketplace">
                {" "}
                <img
                  draggable="false"
                  src={Marketplace_Icon}
                  alt="Market Place Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
          </ul>
        </nav>
        <div className={classes.search}>
          <BarraPesquisa data={Names} />
        </div>
        <div className={classes.logo} onClick={logo}>
          {" "}
          <img
            draggable="false"
            src={logo_sem_titulo}
            className={classes.logo}
            alt="Logo ArtRoom"
          />{" "}
        </div>
      </header>
    </div>
  );
}

export default MainNavigation;
