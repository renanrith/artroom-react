import classes from "./Modal.module.css";
import Axios from "axios";
import { supabase } from "../../../supabase/supabaseClient";
import { useState, useRef } from "react";
import { MdAddPhotoAlternate } from "react-icons/md"
import { AiFillSound } from "react-icons/ai"
import { RiVideoAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function PostPopup(props){
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fileUploaded, setFileUploaded] = useState(null);
  const navigate = useNavigate();


  const hiddenFileInput = useRef(null);

  const handleSubmit = async (event) => {
    const fileExt = fileUploaded.type.split('.')[1];
    const fileName = `${Date.now()}.${fileExt}.png`;
    const { data, error } = await supabase.storage
    .from('images')
    .upload(`public/${fileName}`, fileUploaded);

    const { data: publicURL, error: publicURLError } = await supabase.storage
    .from('images')
    .getPublicUrl(`public/${fileName}`)

    Axios.post("http://localhost:8080/upload/uploads", {
      titulo: titulo,
      descricao: descricao,
      author: localStorage.getItem("username"),
      type : "image",
      image: publicURL.publicURL.split('"'),
      like: 0
    });
    navigate("/home");
  };

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
        <input type="file" accept=".png" ref={hiddenFileInput} onChange={(e) => { setFileUploaded(e.target.files[0]) }}/>
        <MdAddPhotoAlternate size={40} className={classes.icon} color="#31F0F7"/>
        <AiFillSound size={40} className={classes.icon} color="#F72F3A"/>
        <RiVideoAddFill size={40} className={classes.icon} color="#6C3BF4"/>

        <button className={classes.postar} onClick={handleSubmit}> Postar </button>
      </div>
    )
}
