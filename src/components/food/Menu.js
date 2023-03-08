import classes from "./Menu.module.css";
import menuBtn from "../../assets/menu-btn.svg";
const Menu = () => {
  return (
    <div className={classes["menu-layout"]}>
      <div className={classes["menu-container"]}>
        <div className={classes["menu-column"]}>
          <div className={classes["logo-box"]}>
            <span className={classes.logo}>Plan.this</span>
            <img src={menuBtn} />
          </div>
        </div>
        <div className={classes["menu-column"]}></div>
        <div className={classes["menu-column"]}></div>
      </div>
    </div>
  );
};

export default Menu;
