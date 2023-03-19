import classes from "./MenuItem.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenuMeal } from "../store/menu-actions";
import { menuActions } from "../store/menu-slice";
import { foodActions } from "../store/food-slice";
import { updateMeal, sendNewMeal } from "../store/food-actions";
import { NavLink } from "react-router-dom";
const MenuItem = (props) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  //FOOD ITEM
  const foodReducer = useSelector((state) => state.foodReducer);
  const displayAddBtn = foodReducer.displayMenu.value;
  const date = foodReducer.date;
  const addDailyMeal = () => {
    if (foodReducer.displayMenu.action === "update") {
      dispatch(
        updateMeal({
          type: foodReducer.displayMenu.type,
          id: foodReducer.displayMenu.id,
          date: date,
          name: props.data.name,
          ingredients: props.data.ingredients,
          directions: props.data.directions,
        })
      );
    }
    if (foodReducer.displayMenu.action === "add") {
      dispatch(
        sendNewMeal({
          date: date,
          type: foodReducer.displayMenu.type,
          name: props.data.name,
          ingredients: props.data.ingredients,
          directions: props.data.directions,
        })
      );
    }
    dispatch(foodActions.setDisplayMenu());
  };
  // FOOD ITEM
  const detailsHandler = () => {
    setShowDetails(!showDetails);
  };

  const deleteMeal = () => {
    dispatch(
      deleteMenuMeal({
        type: props.data.type,
        id: props.data.id,
      })
    );
  };

  const ingredients = props.data.ingredients.split(",");
  return (
    <li
      className={`${classes["meal-item"]} ${
        showDetails && classes["meal-item-selected"]
      }`}
      onClick={detailsHandler}
      key={props.key}
    >
      <span className={classes["meal-item-header"]}>
        <img src={props.img} />
        {props.data.name}
      </span>

      {showDetails && (
        <div
          className={`${classes["meal-details"]} ${
            props.data.type === "Extra" && classes["meal-details-extra"]
          }`}
        >
          <span className={classes["meal-details-header"]}>INGREDIENTS</span>
          <ul>
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <span className={classes["meal-details-header"]}>DIRECTIONS</span>
          <span>{props.data.directions}</span>
          <span className={classes["btn-box"]}>
            {displayAddBtn === true && (
              <NavLink to="/home/food">
                <button onClick={addDailyMeal}>Add</button>
              </NavLink>
            )}
            <button
              onClick={() => dispatch(menuActions.updateMeal(props.data))}
            >
              Update
            </button>
            <button onClick={deleteMeal}>Delete</button>
          </span>
        </div>
      )}
    </li>
  );
};
export default MenuItem;
