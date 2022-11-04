import classes from "./marketItem.module.css";
import Tilt from 'react-parallax-tilt';

export default function MarketItem(props) {


  return (
    <div className={classes.container}>
      <Tilt>
        <div className={classes.card}>
          <div className={classes.content}>
            <img src={props.image} alt="Imagem" />
            <h2>{props.title}</h2>
            <h2>R${props.preco} </h2>
            <p>{props.description}</p>
            <button className={classes.button} onClick={props.onClick}> Ver mais </button>
          </div>
        </div>
      </Tilt>
    </div>

  )
}
