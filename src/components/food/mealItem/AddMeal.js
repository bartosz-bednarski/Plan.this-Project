import { useState } from "react";
import classes from "./Meal.module.css";
import { fetchMealsData, sendNewMeal } from "../../store/meal-actions";
import { useDispatch, useSelector } from "react-redux";
import MealForm from "./MealForm";
const AddMeal = (props) => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateReducer.dateTotal);
  // const [mealIsEdited, setMealIsEdited] = useState(false);
  const mealsData = useSelector((state) => state.mealsReducer.meals);
  // const editorHandler = () => {
  //   setMealIsEdited(!mealIsEdited);
  // };
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
  // const plus = (
  //   <svg
  //     width="96"
  //     height="96"
  //     viewBox="0 0 96 96"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     onClick={editorHandler}
  //   >
  //     <line
  //       x1="49.5"
  //       y1="2.5"
  //       x2="49.5"
  //       y2="93.5"
  //       stroke="black"
  //       stroke-width="5"
  //       stroke-linecap="round"
  //     />
  //     <line
  //       x1="2.5"
  //       y1="47.5"
  //       x2="93.5"
  //       y2="47.5"
  //       stroke="black"
  //       stroke-width="5"
  //       stroke-linecap="round"
  //     />
  //   </svg>
  // );
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      sendNewMeal({
        date: date,
        type: props.type,
        name: mealName,
        ingredients: mealIngredients,
        directions: mealDirections,
      })
    );
    setTimeout(() => {
      dispatch(fetchMealsData(dispatch));
    }, 300);
  };
  return (
    <MealForm
      action={"add"}
      onSubmit={onSubmit}
      type={props.type}
      mealName={mealName}
      mealNameHandler={mealNameHandler}
      mealIngredientsHandler={mealIngredientsHandler}
      mealIngredients={mealIngredients}
      mealDirections={mealDirections}
      mealDirectionsHandler={mealDirectionsHandler}
    />
  );

  // return (
  //   <form onSubmit={onSubmit}>
  //     <div className={classes["meal-box"]}>
  //       <span className={classes["meal-type"]}>{props.type}</span>
  //       {mealIsEdited && (
  //         <input
  //           type="text"
  //           value={mealName}
  //           required
  //           onChange={mealNameHandler}
  //         ></input>
  //       )}
  //       {!mealIsEdited && (
  //         <span className={classes["meal-name"]}>Meal name</span>
  //       )}
  //       <span className={classes["add-meal-btn"]}>{plus}</span>

  //       {mealIsEdited && (
  //         <>
  //           <label className={classes["meal-ingredients"]}>INGREDIENTS</label>
  //           <textarea
  //             id="ingredients"
  //             onChange={mealIngredientsHandler}
  //             type="text"
  //             required
  //             value={mealIngredients}
  //           ></textarea>
  //           <label className={classes["meal-ingredients"]}>DIRECTIONS</label>
  //           {mealIsEdited && (
  //             <textarea
  //               type="text"
  //               required
  //               value={mealDirections}
  //               onChange={mealDirectionsHandler}
  //               id="directions"
  //             ></textarea>
  //           )}
  //           <button>Add meal</button>
  //         </>
  //       )}
  //     </div>
  //   </form>
  // );
};
export default AddMeal;
