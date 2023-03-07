import classes from "./Meal.module.css";
import breakfast from "../../assets/breakfast.png";
import dinner from "../../assets/dinner.png";
import supper from "../../assets/supper.png";
import { useState } from "react";
import UpdateMeal from "./UpdateMeal";
const Meal = (props) => {
  const [directionsAreShown, setDirectionsAreShown] = useState(false);
  const directionsHandler = () => {
    setDirectionsAreShown(!directionsAreShown);
  };
  const [update, setUpdate] = useState(false);

  const updateHandler = () => {
    setUpdate(!update);
  };
  //   const [mealType, setMealType] = useState({ type: "Meal Type", img: dinner });
  //   const mealTypeHandler = ()
  //   if (props.type.type === "breakfast") {
  //     setMealType({ type: "Breakfast", img: breakfast });
  //   }
  //   if (props.type.type === "dinner") {
  //     setMealType({ type: "Dinner", img: dinner });
  //   }
  //   if (props.type.type === "supper") {
  //     setMealType({ type: "Supper", img: supper });
  //   }
  const ingredients = props.meal.ingredients.split(",");
  console.log(ingredients);
  return (
    <>
      {!update && (
        <div className={classes["meal-box"]}>
          <span className={classes["meal-type"]}>{props.meal.type}</span>
          <span className={classes["meal-name"]}>{props.meal.name}</span>
          {props.meal.type === "Breakfast" && (
            <div className={classes["image-box"]} onClick={directionsHandler}>
              <p className={classes["image-text"]}>
                {!directionsAreShown ? "DIRECTIONS" : "INGREDIENTS"}
              </p>
              <img className={classes["meal-img"]} src={breakfast} />
            </div>
          )}
          {props.meal.type === "Dinner" && (
            <div className={classes["image-box"]} onClick={directionsHandler}>
              <p className={classes["image-text"]}>
                {!directionsAreShown ? "DIRECTIONS" : "INGREDIENTS"}
              </p>
              <img className={classes["meal-img"]} src={dinner} />
            </div>
          )}
          {props.meal.type === "Supper" && (
            <div className={classes["image-box"]} onClick={directionsHandler}>
              <p className={classes["image-text"]}>
                {!directionsAreShown ? "DIRECTIONS" : "INGREDIENTS"}
              </p>
              <img className={classes["meal-img"]} src={supper} />
            </div>
          )}

          <span className={classes["meal-ingredients"]}>
            {!directionsAreShown ? "INGREDIENTS" : "DIRECTIONS"}
          </span>
          {!directionsAreShown && (
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          )}
          {directionsAreShown && (
            <p className={classes.directions}>{props.meal.directions}</p>
          )}
          <button className={classes["update-btn"]} onClick={updateHandler}>
            Update
          </button>
        </div>
      )}
      {update && (
        <UpdateMeal updateHandler={updateHandler} updatedMeal={props.meal} />
      )}
    </>
  );
};
export default Meal;
