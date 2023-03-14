import classes from "./FoodItem.module.css";
import breakfast from "../../assets/breakfast.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import FoodForm from "./FoodForm";
const FoodItem = (props) => {
  const [directionsAreShown, setDirectionsAreShown] = useState(false);
  const directionsHandler = () => {
    setDirectionsAreShown(!directionsAreShown);
  };

  const mealType = useSelector((state) => state.foodReducer[props.type]);
  console.log(mealType);
  const [update, setUpdate] = useState(false);

  const updateHandler = () => {
    setUpdate(!update);
  };
  const ingredients = mealType != undefined ? mealType.ingredients : [];

  console.log(ingredients);
  return (
    <>
      <div className={classes["meal-box"]}>
        <span className={classes["meal-type"]}>{props.type}</span>
        {mealType != null && update === false && (
          <>
            <span className={classes["meal-name"]}>{mealType.name}</span>
            <div className={classes["image-box"]} onClick={directionsHandler}>
              <p className={classes["image-text"]}>
                {!directionsAreShown ? "DIRECTIONS" : "INGREDIENTS"}
              </p>
              <img className={classes["meal-img"]} src={breakfast} />
            </div>

            <span className={classes["meal-ingredients"]}>
              {!directionsAreShown ? "INGREDIENTS" : "DIRECTIONS"}
            </span>
            {!directionsAreShown && (
              <ul>
                {ingredients != null &&
                  ingredients
                    .split(",")
                    .map((ingredients) => (
                      <li key={ingredients}>{ingredients}</li>
                    ))}
              </ul>
            )}
            {directionsAreShown && (
              <p className={classes.directions}>{mealType.directions}</p>
            )}
          </>
        )}
        {update && (
          <FoodForm
            action={ingredients != null ? "update" : "add"}
            type={props.type}
            updateHandler={updateHandler}
          />
        )}
        <button className={classes["update-btn"]} onClick={updateHandler}>
          {!update ? (mealType.name === "" ? "Add meal" : "Update") : "Cancel"}
        </button>
      </div>
    </>
  );
};
export default FoodItem;
