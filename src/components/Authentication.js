import classes from "./Authentication.module.css";
import { Form } from "react-router-dom";
const Authentication = () => {
  return (
    <div className={classes["auth-container"]}>
      <div className={classes["auth-box"]}>
        <Form method="post" className={classes.form}>
          <h1>Log in</h1>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
          <button>Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Authentication;
