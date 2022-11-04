import classes from "./marketList.module.css";
import MarketItem from "./marketItem";
import MarketPage from "./marketPage";

export default function MarketPageList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.marketItem.map((marketItem) => {
          return (
            <div>
              <MarketPage
                key={marketItem.id}
                id={marketItem.id}
                user={marketItem.user}
                image={marketItem.image}
                title={marketItem.title}
                description={marketItem.description}
                preco={marketItem.preco}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
