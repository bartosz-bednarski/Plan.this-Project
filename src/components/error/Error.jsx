import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getUserStatus } from "../../Firebase/authUser";
import classes from "./Error.module.css";
const Error = (props) => {
  useEffect(() => {
    getUserStatus();
  });
  const userAuthenticated = getUserStatus();
  return (
    <div className={classes["error-container"]}>
      <span className={classes["logo"]}>Plan.This</span>
      <span className={classes["error-code"]}>{props.errorCode}</span>
      <span className={classes["error-message"]}>{props.errorMessage}</span>
      <NavLink to={userAuthenticated ? "auth/home" : "/"}>
        <button>
          {userAuthenticated ? "Back to home page" : "Back to start page"}
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
