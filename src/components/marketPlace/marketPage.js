import MainNavigation from "../layout/MainNavigation";
import classes from "./marketPage.module.css";
import chirio from "../../imagens/imgperfil/chirio.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export default function MarketPage(props) {

  return (
    <>
      <div className={classes.fundo}>
        <div>
          <img
            src={props.image}
            alt="nicolas"
          />
        </div>
        <div className={classes.texto}> 
        <h1>{props.title}</h1>
        <h2>{props.user}</h2>
        <h4> {props.description} </h4>
        <h4>R${props.preco}  </h4>
        <button> Comprar </button>

        </div>
        {/*}
          <div className={classes.caixa}>
            <div className={classes.cartao}>
              <div classesName={classes.produto}>
                <div className={classes.UploadImagem}>
                  <img
                    src="https://pbs.twimg.com/media/Fd3IoIQXoAEj8kN?format=jpg&name=large"
                    alt="nicolas"
                  />
                </div>
                <div className={classes.produtoLateral}>
                  <h2>Desenho Arvore Roxa!</h2>
                  <p>
                    Arte feita a base digitais, retrata uma linda arvore roxa que
                    apareceu em meu sonho.
                  </p>
                  <h2>22$$</h2>
                  <a href="TelaCompra.html" >Comprar</a>
                </div>
              </div>
            </div>

          </div>
   */}
      </div>
    </>
  );
}
