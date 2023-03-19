import classes from "./Header.module.css";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CalendarComponent from "../UI/Calendar";
import { signOutUser } from "../../Firebase/authUser";
const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-box"]}>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink
                is
                className={({ isActive }) =>
                  isActive ? classes.active : classes.link
                }
                to="home"
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
                to="tasks"
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                is
                className={({ isActive }) =>
                  isActive ? classes.active : classes.link
                }
                to="sport"
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
                to="food"
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
                to="shopping"
              >
                Shopping
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.auth}>
          <NavLink to="/">
            <button className={classes["logout-button"]} onClick={signOutUser}>
              Logout
            </button>
          </NavLink>

          <div className={classes.calendar}>
            <CalendarComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
