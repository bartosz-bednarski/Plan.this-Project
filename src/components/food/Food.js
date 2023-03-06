import classes from "./Food.module.css";
import Meal from "./Meal";
import { useState } from "react";
import AddMeal from "./AddMeal";
const Food = (props) => {
  const [dummyMeal, setDummyMeal] = useState("none");
  return (
    <div className={classes["main-container"]}>
      <span className={classes["date"]}>Fri 25th March</span>
      <div className={classes["meals-container"]}>
        <Meal type={"Breakfast"} />
        <Meal type={"Dinner"} />
        <AddMeal />
      </div>
    </div>
  );
};

export default Food;
