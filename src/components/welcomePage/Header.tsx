import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { getUserId, signOutUser } from "../../Firebase/authUser";
const Header: React.FC = () => {
  const userId = getUserId();

  return (
    <div className={classes["header-container"]}>
      <span className={classes["logo"]}>Plan.This</span>
      {userId && (
        <NavLink to="/authentication?mode=login">
          <button onClick={signOutUser} className={classes["login-btn"]}>
            Logout
          </button>
        </NavLink>
      )}
      {!userId && (
        <NavLink to="/authentication?mode=login">
          <button className={classes["login-btn"]}>Login</button>
        </NavLink>
      )}
    </div>
  );
};
export default Header;
