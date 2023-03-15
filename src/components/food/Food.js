import classes from "./Food.module.css";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import CalendarComponent from "../UI/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsData } from "../store/food-actions";
import { NavLink } from "react-router-dom";
import breakfastImg from "../../assets/breakfast.png";
import dinnerImg from "../../assets/dinner.png";
import supperImg from "../../assets/supper.png";
import extraImg from "../../assets/extra.svg";
const Food = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.foodReducer.date);
  const dateReducer = useSelector((state) => state.dateReducer);
  const foodIsUpdated = useSelector((state) => state.foodReducer.foodIsUpdated);
  useEffect(() => {
    dispatch(fetchMealsData(date));
  }, [date, foodIsUpdated]);

  const [calendarIsShown, setCalendarIsShown] = useState(false);
  const calendarHandler = () => {
    setCalendarIsShown(!calendarIsShown);
  };
  return (
    <div className={classes["main-container"]}>
      <span className={classes["date"]} onClick={calendarHandler}>
        {`${dateReducer.day} ${dateReducer.date} ${dateReducer.month}`}
      </span>
      {calendarIsShown && (
        <div className={classes.calendar}>
          <CalendarComponent />
        </div>
      )}
      <div className={classes["meals-container"]}>
        <FoodItem type="Breakfast" img={breakfastImg} />
        <FoodItem type="Dinner" img={dinnerImg} />
        <FoodItem type="Supper" img={supperImg} />
        <FoodItem type="Extra" img={extraImg} />
      </div>
      <NavLink to="/menu">
        <button className={classes["menu-nav-btn"]}>Menu</button>
      </NavLink>
    </div>
  );
};

export default Food;
