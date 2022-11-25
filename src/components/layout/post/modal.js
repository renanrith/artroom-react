import classes from "./Modal.module.css";
import Axios from "axios";
import { supabase } from "../../../supabase/supabaseClient";
import { useState, useRef, useEffect } from "react";
import { MdAddPhotoAlternate } from "react-icons/md"
import { AiFillSound } from "react-icons/ai"
import { RiVideoAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


export default function PostPopup(props){
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fileUploaded, setFileUploaded] = useState(null);
  const [userImage, setUserImage] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    
    Axios.post("http://localhost:8080/user/getInformations", {
      getUser: localStorage.getItem("username")
    }).then((res) => {
      setUserImage(res.data.userImage);
    });

  }, []);

  const hiddenFileInput = useRef(null);

  const handleSubmit = async (event) => {

    if (fileUploaded == null || fileUploaded == undefined) {
      Axios.post("http://localhost:8080/upload/uploads", {
      titulo: titulo,
      descricao: descricao,
      author: localStorage.getItem("username"),
      type : "text",
      like: 0,
      userImage: userImage
    });
    
    navigate("/");
    } else {

    const fileExt = fileUploaded.type.split('.')[1];
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
    .from('images')
    .upload(`public/${fileName}`, fileUploaded);

    const { data: publicURL, error: publicURLError } = await supabase.storage
    .from('images')
    .getPublicUrl(`public/${fileName}`)

      Axios.post("http://localhost:8080/upload/uploads", {
        titulo: titulo,
        descricao: descricao,
        descricao: descricao,
        author: localStorage.getItem("username"),
        type : "image",
        image: publicURL.publicURL.split('"'),
        like: 0,
        userImage: userImage
      });
      
    navigate("/");
    }
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

        <label for="uploadImage">
        <MdAddPhotoAlternate size={40} className={classes.icon} color="#31F0F7"/>
        <input id="uploadImage" className={classes.uploadImage} type="file" accept=".png,.jpeg,.jpg,.webp" ref={hiddenFileInput} onChange={(e) => { setFileUploaded(e.target.files[0]) }}/>
        </label>
        <AiFillSound size={40} className={classes.icon} color="#F72F3A"/>
        <RiVideoAddFill size={40} className={classes.icon} color="#6C3BF4"/>


        <button className={classes.postar} onClick={handleSubmit}> Postar </button>
      </div>
    )
}
