import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
const AuthHomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AuthHomePage;
