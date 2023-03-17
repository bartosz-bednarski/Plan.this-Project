import classes from "./Authentication.module.css";
import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
const Authentication = () => {
  // const error = useActionData();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className={classes["auth-container"]}>
      <div className={classes["auth-box"]}>
        <Form method="post" className={classes.form}>
          <h1>{isLogin ? "Log in" : "Register"}</h1>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="on"
            required
          />
          {/* {error && <p>{error && error}</p>} */}

          <Link
            to={`?mode=${isLogin ? "register" : "login"}`}
            className={classes.link}
          >
            {isLogin
              ? "Don't have an account ? Register now for free."
              : "Already have an account ? Log in."}{" "}
          </Link>

          <button>{isLogin ? "Log in" : "Register"}</button>
        </Form>
      </div>
    </div>
  );
};

export default Authentication;
