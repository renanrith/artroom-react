import classes from "./marketItem.module.css";
import Tilt from 'react-parallax-tilt';
import { useState } from "react";
import Backdrop from "../layout/post/backdrop";
import MarketPage from "./marketPage";


export default function MarketItem(props) {
  return (

    <div className={classes.container}>
      <Tilt>
        <div className={classes.card}>
          <div className={classes.content}>
            <img src={props.image} alt="Imagem" />
            <h2>{props.title}</h2>
            <h2>{props.preco} R$</h2>
            <p>{props.description}</p>
            <button onClick={props.onClick}> <a>Ver mais</a> </button>
          </div>
        </div>

      </Tilt>
    </div>

  )
}
