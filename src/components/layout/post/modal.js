import classes from "./Modal.module.css";
import imageIcon from "./../../../imagens/makepost/imgIcon.png";
import audioIcon from "./../../../imagens/makepost/audIcon.png";
import textIcon from "./../../../imagens/makepost/txtIcon.png";
import videoIcon from "./../../../imagens/makepost/videoIcon.png";

export default function PostPopup() {
  return (
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
      <input
        className={classes.descricao}
        type="text"
        name="Descricao"
        id="Descricao"
        placeholder="Descrição"
        autoComplete="off"
        autoCapitalize="On"
      />
      <br/>
      <img src={imageIcon} className={classes.icon} />
      <img src={audioIcon} className={classes.icon} />
      <img src={textIcon} className={classes.icon} />
      <img src={videoIcon} className={classes.icon} />
    </div>
  );
}
