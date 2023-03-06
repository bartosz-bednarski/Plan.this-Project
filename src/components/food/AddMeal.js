import { useState } from "react";
import classes from "./Meal.module.css";
import { sendNewMeal } from "../store/meal-actions";
import { useDispatch, useSelector } from "react-redux";
const AddMeal = (props) => {
  const dispatch = useDispatch();
  const [mealIsEdited, setMealIsEdited] = useState(false);

  const editorHandler = () => {
    setMealIsEdited(true);
  };
  const [mealName, setMealName] = useState("");
  const [mealIngredients, setMealIngredients] = useState("");
  const [mealDirections, setMealDirections] = useState("");

  const mealNameHandler = (event) => {
    setMealName(event.target.value);
  };
  const mealIngredientsHandler = (event) => {
    setMealIngredients(event.target.value);
  };
  const mealDirectionsHandler = (event) => {
    setMealDirections(event.target.value);
  };
  const plus = (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={editorHandler}
    >
      <line
        x1="49.5"
        y1="2.5"
        x2="49.5"
        y2="93.5"
        stroke="black"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="2.5"
        y1="47.5"
        x2="93.5"
        y2="47.5"
        stroke="black"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  );
  const onSubmit = (event) => {
    event.preventDefault();
    const array = {
      name: mealName,
      ingredients: mealIngredients,
      directions: mealDirections,
    };
    // dispatch(
    //   sendNewMeal({
    //     type: newMeal.type,
    //     name: newMeal.name,
    //     ingredients: newMeal.ingredients,
    //     directions: newMeal.directions,
    //   })
    // );

    console.log(array);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={classes["meal-box"]}>
        <span className={classes["meal-type"]}>Supper</span>
        {mealIsEdited && (
          <input
            type="text"
            value={mealName}
            required
            onChange={mealNameHandler}
          ></input>
        )}
        {!mealIsEdited && (
          <span className={classes["meal-name"]}>Meal name</span>
        )}

        {plus}
        {mealIsEdited && (
          <>
            {" "}
            <label className={classes["meal-ingredients"]}>INGREDIENTS</label>
            <textarea
              id="ingredients"
              onChange={mealIngredientsHandler}
              type="text"
              required
              value={mealIngredients}
            ></textarea>
            <label className={classes["meal-ingredients"]}>DIRECTIONS</label>
            {mealIsEdited && (
              <textarea
                type="text"
                required
                value={mealDirections}
                onChange={mealDirectionsHandler}
                id="directions"
              ></textarea>
            )}
            <button>Add meal</button>
          </>
        )}
      </div>
    </form>
  );
};
export default AddMeal;
