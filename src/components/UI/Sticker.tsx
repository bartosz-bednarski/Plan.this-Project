import classes from "./Sticker.module.css";
const Sticker: React.FC<{ children: any }> = (props) => {
  return <div className={classes.sticker}>{props.children}</div>;
};
export default Sticker;
