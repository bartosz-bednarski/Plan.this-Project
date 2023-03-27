import classes from "./Header.module.css";
import Logo from "../UI/Logo";
import { NavLink } from "react-router-dom";
import CalendarComponent from "../UI/Calendar";
import { signOutUser } from "../../Firebase/authUser";
import hamburgerBtn from "../../assets/hamburger-menu.svg";
import closeBtn from "../../assets/x-btn.svg";
import { useState } from "react";
const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerMenuHandler = () => {
    setShowHamburger(!showHamburger);
  };
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-box"]}>
        <Logo />
        {!showHamburger && (
          <button
            className={classes["hamburger-btn"]}
            onClick={hamburgerMenuHandler}
          >
            <img src={hamburgerBtn} />
          </button>
        )}

        {showHamburger && (
          <nav className={classes["hamburger-menu"]}>
            <ul>
              <li>
                <span className={classes["hamburger-logo-box"]}>
                  <img src={closeBtn} onClick={hamburgerMenuHandler} />
                  <Logo />
                </span>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.link
                  }
                  to="home"
                  onClick={hamburgerMenuHandler}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.link
                  }
                  to="tasks"
                  onClick={hamburgerMenuHandler}
                >
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.link
                  }
                  to="sport"
                  onClick={hamburgerMenuHandler}
                >
                  Sport
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.link
                  }
                  to="food"
                  onClick={hamburgerMenuHandler}
                >
                  Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.link
                  }
                  to="shopping"
                  onClick={hamburgerMenuHandler}
                >
                  Shopping
                </NavLink>
              </li>
              <li className={classes["hamburger-logout-btn"]}>
                <NavLink to="/" onClick={signOutUser}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        <nav className={classes["nav-menu"]}>
          <ul>
            <li>
              <NavLink
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
