import classes from "./marketList.module.css";
import MarketItem from "./marketItem";

export default function MarketList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.marketItems.map((marketItems) => {
          return (
            <div>
              <MarketItem
                onClick={props.onClick}
                key={marketItems.id}
                id={marketItems.id}
                user={marketItems.user}
                userImage={marketItems.user_image}
                image={marketItems.image}
                title={marketItems.title}
                description={marketItems.description}
                likes={marketItems.likes}
                preco={marketItems.preco}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
