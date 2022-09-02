/* import classes from './comentario.module.css';

export default function Comentario(props){
    return(
        <div>
        <div className={classes.fundo}>
        <img src='https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg' className={classes.userFoto} />
        <h3> Renan </h3>
            <textarea
          className={classes.comentario}
          type="text"
          name="Descricao"
          id="Descricao"
          placeholder="Escreva seu comentário"
          autoComplete="off"
          autoCapitalize="On"
        />
        </div>
        </div>
    )
}
*/

import Post from "../../ui/posts";
import classes from "../../posts/postImagem/posts_imagem.module.css";

export default function Coment(props) {
    
    return (
      <li className={classes.item}>
        <Post>
          {/* User */}
          <div className={classes.user}>
          <img className={classes.userImage} alt={props.user} src={props.userImage} />
            <h3 className={classes.user}>
              {props.user}
            </h3>
            {/* Post */}
          </div>
          <div className={classes.content}>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>            
          </div>
        </Post>
      </li> 
    );
}
