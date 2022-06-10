import classes from "./Modal.module.css";
import imageIcon from "./../../../imagens/makepost/imageIcon.png"

export default function PostPopup(){
    return(
    <div className={classes.modal}>
    <img src={imageIcon} className={classes.imageIcon}/>
    <button> Audio </button>
    <button> Texto </button>
    <button> Video </button>
    </div>
    )
}