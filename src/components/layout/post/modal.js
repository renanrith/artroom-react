import classes from "./Modal.module.css";
import Axios from "axios";
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md"
import { AiFillSound } from "react-icons/ai"
import { RiVideoAddFill } from "react-icons/ri"

export default function PostPopup(props){
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = () => {
    Axios.post("http://localhost:8080/upload/uploads", {
      titulo: titulo,
      descricao: descricao,
      author: localStorage.getItem("username"),
      type : "text",
      like: 0
    });
    window.location.reload()
  }

    return(
        <div className={classes.modal}>
        <input
          className={classes.titulo}
          type="text"
          name="Titulo"
          id="Titulo"
          placeholder="Titulo"
          autoComplete="off"
          autoCapitalize="On"
          onChange={(e) => { setTitulo(e.target.value)}}
        />
        <textarea
          
          className={classes.descricao}
          type="text"
          name="Descricao"
          id="Descricao"
          placeholder="Descrição"
          autoComplete="off"
          autoCapitalize="On"
          onChange={(e) => { setDescricao(e.target.value)} }
        />
        <br/>
        <MdAddPhotoAlternate size={40} className={classes.icon} color="#31F0F7"/>
        <AiFillSound size={40} className={classes.icon} color="#F72F3A"/>
        <RiVideoAddFill size={40} className={classes.icon} color="#6C3BF4"/>

        <button className={classes.postar} onClick={handleSubmit}> Postar </button>
      </div>
    )
}
