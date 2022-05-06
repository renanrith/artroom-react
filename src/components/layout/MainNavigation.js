import { Link } from "react-router-dom";
import React from "react";

import bell_icon from "../../imagens/MainNavigation/bell_icon.png";
import profile_icon from "../../imagens/MainNavigation/profile_icon.png";
import Marketplace_Icon from "../../imagens/MainNavigation/Marketplace_Icon.png";
import logo_sem_titulo from "../../imagens/MainNavigation/logo_sem_titulo.svg";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.header_container}>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <img
                  src={bell_icon}
                  alt="Bell Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/profile">
                {" "}
                <img
                  src={profile_icon}
                  alt="Profile Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/profile">
                {" "}
                <img
                  src={Marketplace_Icon}
                  alt="Market Place Icon"
                  className={classes.icon}
                />{" "}
              </Link>{" "}
            </li>
          </ul>
        </nav>
        <div className={classes.pesquisa}>
          <input
            type="text"
            name="pesquisa"
            id="pesquisa"
            placeholder="Busque Por Novas Artes!"
            autoComplete="off"
            autoCapitalize="On"
          />
        </div>
        <div className={classes.logo}>
          {" "}
          <Link to="/home">
            {" "}
            <img
              src={logo_sem_titulo}
              className={classes.logo}
              alt="Logo ArtRoom"
            />{" "}
          </Link>{" "}
        </div>
      </header>
    </div>
  );
}

export default MainNavigation;
