import classes from './comentario.module.css';

export default function Comentario(props){
    return(
        <div>
        <div className={classes.fundo}>
        <img src='https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg' className={classes.userFoto} />
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