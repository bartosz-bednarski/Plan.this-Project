import classes from "./Header.module.css";
import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const mealsReducer = useSelector((state) => state.mealsReducer);
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
        <button
          onClick={() => {
            console.log("meals reducer after fetch", mealsReducer);
          }}
        >
          Check console.log
        </button>
      </div>
    </div>
  );
};

export default Header;
