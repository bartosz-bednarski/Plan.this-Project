import classes from "./Sticker.module.css";
const Sticker = (props) => {
  return <div className={classes.sticker}>{props.children}</div>;
};
export default Sticker;
