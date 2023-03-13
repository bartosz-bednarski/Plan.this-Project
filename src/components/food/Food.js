import classes from "./Food.module.css";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import CalendarComponent from "../UI/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../store/food-slice";
import { fetchMealsData } from "../store/food-actions";
import { NavLink } from "react-router-dom";
const Food = (props) => {
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
  const mealsData = useSelector((state) => state.foodReducer.todayMeals);
  // const activeDayMeals = Object.keys(mealsData)
  //   .filter((key) => key.includes(date.dateTotal))
  //   .reduce((obj, key) => {
  //     return Object.assign(obj, {
  //       ...mealsData[key],
  //     });
  //   }, {});
  // const dailyMealsWithNames = Object.keys(mealsData).map((key) => {
  //   return { id: key, ...mealsData[key] };
  // });

  const breakfast = useSelector((state) => state.foodReducer.Breakfast);
  const dinner = useSelector((state) => state.foodReducer.Dinner);
  const supper = useSelector((state) => state.foodReducer.Supper);
  console.log("mealsData", mealsData);
  // console.log("Daily meals", activeDayMeals);
  // console.log("dailyMealsWithNames", dailyMealsWithNames);
  console.log(breakfast);
  // console.log("breakfast", breakfast, "dinner", dinner, "supper,", supper);
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
        {/* {breakfast !== undefined ? (
          <FoodItem meal={breakfast} />
        ) : (
          <AddMeal type={"Breakfast"} />
        )}
        {dinner !== undefined ? (
          <FoodItem meal={dinner} />
        ) : (
          <AddMeal type={"Dinner"} />
        )}
        {supper !== undefined ? (
          <FoodItem meal={supper} />
        ) : (
          <AddMeal type={"Supper"} />
        )} */}
      </div>
      <NavLink to="/menu">Menu</NavLink>
    </div>
  );
};

export default Food;
