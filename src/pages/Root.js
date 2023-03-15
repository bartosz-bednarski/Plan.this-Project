import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <div className={classes["root-container"]}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
