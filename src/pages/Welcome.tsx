import { Outlet } from "react-router-dom";
import Home from "../components/welcomePage/Home";
const WelcomePage: React.FC = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default WelcomePage;
