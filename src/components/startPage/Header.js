import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <span className={classes["logo"]}>Plan.This</span>
      <NavLink to="/authentication">
        <button className={classes["login-btn"]}>Login</button>
      </NavLink>
    </div>
  );
};
export default Header;
