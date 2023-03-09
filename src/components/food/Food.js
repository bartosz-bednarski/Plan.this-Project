import classes from "./Food.module.css";
import Meal from "./mealItem/Meal";
import { useEffect, useState } from "react";
import AddMeal from "./mealItem/AddMeal";
import CalendarComponent from "../UI/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { mealsActions } from "../store/meals-slice";
import { fetchMealsData } from "../store/meal-actions";
import { NavLink } from "react-router-dom";
const Food = (props) => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateReducer);
  useEffect(() => {
    dispatch(mealsActions.setDate(date));
    setTimeout(() => {
      dispatch(fetchMealsData(dispatch));
    }, 200);
  }, [date]);

  const [calendarIsShown, setCalendarIsShown] = useState(false);
  const calendarHandler = () => {
    setCalendarIsShown(!calendarIsShown);
  };
  const mealsData = useSelector((state) => state.mealsReducer.meals);
  const activeDayMeals = Object.keys(mealsData)
    .filter((key) => key.includes(date.dateTotal))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        ...mealsData[key],
      });
    }, {});
  const dailyMealsWithNames = Object.keys(activeDayMeals).map((key) => {
    return { id: key, ...activeDayMeals[key] };
  });

  const breakfast = dailyMealsWithNames.find((key) => key.type === "Breakfast");
  const dinner = dailyMealsWithNames.find((key) => key.type === "Dinner");
  const supper = dailyMealsWithNames.find((key) => key.type === "Supper");

  console.log("mealsData", mealsData);
  console.log("Daily meals", activeDayMeals);
  console.log("dailyMealsWithNames", dailyMealsWithNames);
  console.log(breakfast);
  // console.log("breakfast", breakfast, "dinner", dinner, "supper,", supper);
  return (
    <div className={classes["main-container"]}>
      <span className={classes["date"]} onClick={calendarHandler}>
        {`${date.day} ${date.date} ${date.month}`}
      </span>
      {calendarIsShown && (
        <div className={classes.calendar}>
          <CalendarComponent />
        </div>
      )}
      <div className={classes["meals-container"]}>
        {breakfast !== undefined ? (
          <Meal meal={breakfast} />
        ) : (
          <AddMeal type={"Breakfast"} />
        )}
        {dinner !== undefined ? (
          <Meal meal={dinner} />
        ) : (
          <AddMeal type={"Dinner"} />
        )}
        {supper !== undefined ? (
          <Meal meal={supper} />
        ) : (
          <AddMeal type={"Supper"} />
        )}
      </div>
      <NavLink to="/menu">Menu</NavLink>
    </div>
  );
};

export default Food;
