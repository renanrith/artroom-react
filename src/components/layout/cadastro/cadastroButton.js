import classes from "./cadastroPopUp.module.css"
import { useState } from "react"

import Backdrop from "../post/backdrop";
import CadastroPopup from "./cadastroPop";

export default function CadastroButton() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function PostHandler() {
        setModalIsOpen(true);
    }

    function ClosePostHandler() {
        setModalIsOpen(false);
    }

    return(
        <div >
        <button className={classes.makePost} onClick={PostHandler}>
           Cadastre-se
        </button>
        { modalIsOpen && <CadastroPopup/> }
        { modalIsOpen && <Backdrop onClick={ClosePostHandler}/> }
        { modalIsOpen && <CadastroPopup oi={ClosePostHandler} /> }
        </div>
    )
}