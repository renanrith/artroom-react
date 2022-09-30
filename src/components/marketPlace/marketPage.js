import MainNavigation from "../layout/MainNavigation";
import classes from "./marketPage.module.css";
import chirio from "../../imagens/imgperfil/chirio.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export default function MarketPage() {

  return (
    <>
      <div className={classes.main}>
        <div className={classes.center}>
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
        </div>
      </div>
      {/* <div className="modal">
      <h2>Comprado com Sucesso!</h2>
      <h3><img src="./img/arvoreroxa.png" alt=""/> <br/> Sua compra do produto "Arvore Roxa" <br/> foi concluida com sucesso, <br/> Obrigado!</h3> <br/> 
      </div> */}
    </>
  );
}
