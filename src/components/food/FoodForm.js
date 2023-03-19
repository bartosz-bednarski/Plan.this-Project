import classes from "./FoodForm.module.css";
import { useState } from "react";
import menuBtn from "../../assets/menu-btn.svg";
import keyboardBtn from "../../assets/keyboard-btn.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendNewMeal, updateMeal } from "../store/food-actions";
import { foodActions } from "../store/food-slice";
const FoodForm = (props) => {
  const dispatch = useDispatch();
  const foodReducer = useSelector((state) => state.foodReducer);
  const mealType = useSelector((state) => state.foodReducer[props.type]);
  const [chooseBoxIsDisplayed, setChooseBoxIsDisplayed] = useState(false);
  const [formIsDisplayed, setFormIsDisplayed] = useState(false);
  const chooseBoxToogleHandler = () => {
    setChooseBoxIsDisplayed(!chooseBoxIsDisplayed);
  };
  const formIsDisplayedHandler = () => {
    setFormIsDisplayed(true);
  };
  //FORM
  const [mealName, setMealName] = useState(foodReducer[props.type].name);
  const [mealIngredients, setMealIngredients] = useState(
    foodReducer[props.type].ingredients
  );
  const [mealDirections, setMealDirections] = useState(
    foodReducer[props.type].directions
  );

  const mealNameHandler = (event) => {
    setMealName(event.target.value);
  };
  const mealIngredientsHandler = (event) => {
    setMealIngredients(event.target.value);
  };
  const mealDirectionsHandler = (event) => {
    setMealDirections(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (props.action === "add") {
      dispatch(
        sendNewMeal({
          date: foodReducer.date,
          type: props.type,
          name: mealName,
          ingredients: mealIngredients,
          directions: mealDirections,
        })
      );
    }
    if (props.action === "update") {
      dispatch(
        updateMeal({
          date: foodReducer.date,
          type: props.type,
          id: mealType.id,
          name: mealName,
          ingredients: mealIngredients,
          directions: mealDirections,
        })
      );
    }
    props.updateHandler();
  };
  console.log(props.action);
  return (
    <>
      {!chooseBoxIsDisplayed && (
        <div className={classes["meal-chose-box"]}>
          <NavLink to="menu">
            <button
              onClick={() =>
                dispatch(
                  foodActions.setDisplayMenu({
                    type: props.type,
                    action: props.action,
                    id: mealType.id,
                  })
                )
              }
            >
              <img src={menuBtn} />
              Menu
            </button>
          </NavLink>
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
          <form
            className={classes["food-form"]}
            onSubmit={onSubmit}
            method="get"
            id="mealForm"
          >
            <input
              type="text"
              value={mealName}
              required
              onChange={mealNameHandler}
            ></input>

            <>
              <label className={classes["meal-ingredients"]}>INGREDIENTS</label>
              <textarea
                id="ingredients"
                onChange={mealIngredientsHandler}
                type="text"
                required
                value={mealIngredients}
              ></textarea>
              <label className={classes["meal-ingredients"]}>DIRECTIONS</label>

              <textarea
                type="text"
                required
                value={mealDirections}
                onChange={mealDirectionsHandler}
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
        </>
      )}
    </>
  );
};

export default FoodForm;
