import Header from "./Header";
import classes from "./Home.module.css";
import heroImg from "../../assets/hero-1.png";
import { NavLink } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className={classes["home-container"]}>
      <Header />
      <span className={classes["hero-header"]}>
        Platform that helps You to organize your day.
      </span>
      <div className={classes["hero-container"]}>
        <div className={classes["hero-box-left"]}>
          <span className={classes["logo"]}>Plan.This</span>
          <p>
            Many people struggle with lack of time. By <br />
            organizing your day You can save it and get it
            <br /> more of your live.
            <br />
            <br /> Soo are you in ?
          </p>
          <NavLink to="/authentication?mode=register">
            <button>Create account</button>
          </NavLink>
        </div>
        <div className={classes["hero-right"]}>
          <img className={classes["hero-img"]} src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
