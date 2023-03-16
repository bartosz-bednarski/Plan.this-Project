import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <div className={classes["root-container"]}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
