import classes from "./MenuItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMenuMeal } from "../../store/menu-actions";
import { menuActions } from "../../store/menu-slice";
const MenuItem = (props) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
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
            <button>Add</button>
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
