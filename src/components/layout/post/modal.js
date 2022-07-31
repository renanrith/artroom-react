import classes from "./Modal.module.css";
import { MdAddPhotoAlternate } from "react-icons/md"
import { AiFillSound } from "react-icons/ai"
import { RiVideoAddFill } from "react-icons/ri"

export default function PostPopup(props){
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
        />
        <textarea
          
          className={classes.descricao}
          type="text"
          name="Descricao"
          id="Descricao"
          placeholder="Descrição"
          autoComplete="off"
          autoCapitalize="On"
        />
        <br/>
        <MdAddPhotoAlternate size={40} className={classes.icon} color="#31F0F7"/>
        <AiFillSound size={40} className={classes.icon} color="#F72F3A"/>
        <RiVideoAddFill size={40} className={classes.icon} color="#6C3BF4"/>

        <button className={classes.postar} onClick={props.onClick}> Postar </button>
      </div>
    )
}
