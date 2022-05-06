import classes from "./posts.module.css";

export default function Post(props) {
  return <div className={classes.Card}>{props.children}</div>;
}
