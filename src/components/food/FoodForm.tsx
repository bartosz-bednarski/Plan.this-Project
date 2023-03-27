import classes from "./FoodForm.module.css";
import { FormEvent, useState } from "react";
import menuBtn from "../../assets/menu-btn.svg";
import keyboardBtn from "../../assets/keyboard-btn.svg";
import { NavLink } from "react-router-dom";
import { sendNewMeal, updateMeal } from "../store/food-actions";
import { foodActions } from "../store/food-slice";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store";
const FoodForm: React.FC<{
  action: string;
  type: string;
  updateHandler: () => void;
}> = (props) => {
  const dispatch = useAppDispatch();
  const foodReducer = useAppSelector((state) => state.foodReducer);
  const mealType = useAppSelector((state) => state.foodReducer[props.type]);
  const [chooseBoxIsDisplayed, setChooseBoxIsDisplayed] = useState(false);
  const [formIsDisplayed, setFormIsDisplayed] = useState(false);
  const chooseBoxToogleHandler = () => {
    setChooseBoxIsDisplayed(!chooseBoxIsDisplayed);
  };
  const formIsDisplayedHandler = () => {
    setFormIsDisplayed(true);
  };
  //FORM
  const [mealName, setMealName] = useState(
    foodReducer[props.type as keyof typeof foodReducer].name
  );
  const [mealIngredients, setMealIngredients] = useState(
    foodReducer[props.type as keyof typeof foodReducer].ingredients
  );
  const [mealDirections, setMealDirections] = useState(
    foodReducer[props.type as keyof typeof foodReducer].directions
  );

  const mealNameHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setMealName(event.target.value);
  };
  const mealIngredientsHandler = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    setMealIngredients(event.target.value);
  };
  const mealDirectionsHandler = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    setMealDirections(event.target.value);
  };
  const onSubmit = (event: FormEvent) => {
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
  return (
    <>
      {!chooseBoxIsDisplayed && (
        <div className={classes["meal-chose-box"]}>
          <NavLink
            to="menu"
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
            <button>
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
                required
                value={mealIngredients}
              ></textarea>
              <label className={classes["meal-ingredients"]}>DIRECTIONS</label>

              <textarea
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
