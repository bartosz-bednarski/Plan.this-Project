import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
