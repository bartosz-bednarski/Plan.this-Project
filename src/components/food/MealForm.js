import classes from "./Meal.module.css";
import { useState } from "react";
import menuBtn from "../../assets/menu-btn.svg";
import keyboardBtn from "../../assets/keyboard-btn.svg";
const MealForm = (props) => {
  const [chooseBoxIsDisplayed, setChooseBoxIsDisplayed] = useState(false);
  const [formIsDisplayed, setFormIsDisplayed] = useState(false);

  const chooseBoxIsDisplayedHandler = () => {
    setChooseBoxIsDisplayed(true);
  };
  const chooseBoxIsHiddenHandler = () => {
    setChooseBoxIsDisplayed(false);
  };
  const chooseBoxToogleHandler = () => {
    setChooseBoxIsDisplayed(!chooseBoxIsDisplayed);
  };
  const formIsDisplayedHandler = () => {
    setFormIsDisplayed(true);
  };
  const formIsHiddenHandler = () => {
    setFormIsDisplayed(false);
  };

  return (
    <div className={classes["meal-box"]}>
      {props.action === "add" && !chooseBoxIsDisplayed && !formIsDisplayed && (
        <span className={classes["meal-type"]}>{props.type}</span>
      )}
      {((!chooseBoxIsDisplayed && props.action === "update") ||
        (chooseBoxIsDisplayed && props.action === "add")) && (
        <div className={classes["meal-chose-box"]}>
          <span className={classes["meal-type"]}>{props.type}</span>
          <button>
            <img src={menuBtn} />
            Menu
          </button>
          <button
            onClick={() => {
              chooseBoxToogleHandler();
              formIsDisplayedHandler();
            }}
          >
            <img src={keyboardBtn} />
            Manually
          </button>
        </div>
      )}
      {formIsDisplayed && (
        <>
          <form onSubmit={props.onSubmit} method="get" id="mealForm">
            {formIsDisplayed && (
              <span className={classes["meal-type"]}>{props.type}</span>
            )}
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
          {props.action === "add" && (
            <button
              className={classes["update-btn"]}
              onClick={formIsHiddenHandler}
            >
              Cancel
            </button>
          )}
        </>
      )}
      {/* {props.action === "update" && mealIsUpdating && (
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
      )} */}
      {props.action === "add" && !formIsDisplayed && (
        <button
          className={classes["update-btn"]}
          onClick={() => {
            chooseBoxToogleHandler();
          }}
        >
          {chooseBoxIsDisplayed ? "Cancel" : "Add meal"}
        </button>
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
