import classes from "./Meal.module.css";
import { useState } from "react";
const MealForm = (props) => {
  const [mealIsEdited, setMealIsEdited] = useState(false);
  const editorHandler = () => {
    setMealIsEdited(!mealIsEdited);
  };

  return (
    <div className={classes["meal-box"]}>
      {props.action === "update" && (
        <form onSubmit={props.onSubmit} method="get" id="mealForm">
          <span className={classes["meal-type"]}>{props.type}</span>

          <input
            type="text"
            value={props.mealName}
            required
            onChange={props.mealNameHandler}
          ></input>

          <>
            <label className={classes["meal-ingredients"]}>INGREDIENTS</label>
            <textarea
              id="ingredients"
              onChange={props.mealIngredientsHandler}
              type="text"
              required
              value={props.mealIngredients}
            ></textarea>
            <label className={classes["meal-ingredients"]}>DIRECTIONS</label>

            <textarea
              type="text"
              required
              value={props.mealDirections}
              onChange={props.mealDirectionsHandler}
              id="directions"
            ></textarea>

            <button
              className={classes["add-cancel-btn"]}
              type="submit"
              form="mealForm"
              value={"addMeal"}
            >
              Update
            </button>
          </>
        </form>
      )}

      {props.action === "add" && (
        <>
          <form onSubmit={props.onSubmit} method="get" id="mealForm">
            <span className={classes["meal-type"]}>{props.type}</span>
            {mealIsEdited && (
              <input
                type="text"
                value={props.mealName}
                required
                onChange={props.mealNameHandler}
              ></input>
            )}
            {!mealIsEdited && (
              <span className={classes["meal-name"]}>Meal name</span>
            )}
            {/* <span className={classes["add-meal-btn"]}>{plus}</span> */}

            {mealIsEdited && (
              <>
                <label className={classes["meal-ingredients"]}>
                  INGREDIENTS
                </label>
                <textarea
                  id="ingredients"
                  onChange={props.mealIngredientsHandler}
                  type="text"
                  required
                  value={props.mealIngredients}
                ></textarea>
                <label className={classes["meal-ingredients"]}>
                  DIRECTIONS
                </label>
                {mealIsEdited && (
                  <textarea
                    type="text"
                    required
                    value={props.mealDirections}
                    onChange={props.mealDirectionsHandler}
                    id="directions"
                  ></textarea>
                )}
                <button
                  className={classes["add-cancel-btn"]}
                  type="submit"
                  form="mealForm"
                  value={"addMeal"}
                >
                  Add meal
                </button>
              </>
            )}
          </form>
          <button className={classes["update-btn"]} onClick={editorHandler}>
            {mealIsEdited ? "Cancel" : "Add meal"}
          </button>
        </>
      )}
      {props.action === "update" && (
        <button className={classes["update-btn"]} onClick={props.updateHandler}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default MealForm;
