import classes from "./Food.module.css";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import CalendarComponent from "../UI/Calendar";
import { fetchMealsData } from "../store/food-actions";
import { NavLink } from "react-router-dom";
import breakfastImg from "../../assets/breakfast.png";
import dinnerImg from "../../assets/dinner.png";
import supperImg from "../../assets/supper.png";
import extraImg from "../../assets/extra.svg";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store";
const Food: React.FC = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector((state) => state.foodReducer.date);
  const dateReducer = useAppSelector((state) => state.dateReducer);
  const foodIsUpdated = useAppSelector(
    (state) => state.foodReducer.foodIsUpdated
  );
  useEffect(() => {
    dispatch(fetchMealsData(date));
  }, [date, foodIsUpdated]);

  const [calendarIsShown, setCalendarIsShown] = useState<boolean>(false);
  const calendarHandler = () => {
    setCalendarIsShown(!calendarIsShown);
  };
  return (
    <main className={classes["main-container"]}>
      <header className={classes["date"]} onClick={calendarHandler}>
        {`${dateReducer.day} ${dateReducer.date} ${dateReducer.month}`}
      </header>
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
      <NavLink to="menu">
        <button className={classes["menu-nav-btn"]}>Menu</button>
      </NavLink>
    </main>
  );
};

export default Food;
