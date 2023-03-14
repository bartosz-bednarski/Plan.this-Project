import classes from "./Food.module.css";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import CalendarComponent from "../UI/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsData } from "../store/food-actions";
import { NavLink } from "react-router-dom";
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
        <FoodItem type="Breakfast" />
        <FoodItem type="Dinner" />
        <FoodItem type="Supper" />
      </div>
      <NavLink to="/menu">Menu</NavLink>
    </div>
  );
};

export default Food;
