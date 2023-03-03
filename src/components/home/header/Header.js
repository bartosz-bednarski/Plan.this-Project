import classes from "./Header.module.css";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink
              is
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              is
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to="/sport"
            >
              Sport
            </NavLink>
          </li>
          <li>
            <NavLink
              is
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to="/food"
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              is
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
              to="/shopping"
            >
              Shopping
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.auth}>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
