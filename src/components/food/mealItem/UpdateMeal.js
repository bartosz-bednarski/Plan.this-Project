import MealForm from "./MealForm";
import { useState } from "react";
import { updateMeal, fetchMealsData } from "../../store/meal-actions";
import { useDispatch, useSelector } from "react-redux";
const UpdateMeal = (props) => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateReducer.dateTotal);
  const [mealName, setMealName] = useState(props.updatedMeal.name);
  const [mealIngredients, setMealIngredients] = useState(
    props.updatedMeal.ingredients
  );
  const [mealDirections, setMealDirections] = useState(
    props.updatedMeal.directions
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
    dispatch(
      updateMeal({
        date: date,
        type: props.updatedMeal.type,
        id: props.updatedMeal.id,
        name: mealName,
        ingredients: mealIngredients,
        directions: mealDirections,
      })
    );

    setTimeout(() => {
      dispatch(fetchMealsData(dispatch));
    }, 300);
    props.updateHandler();
  };
  return (
    <MealForm
      updateHandler={props.updateHandler}
      action={"update"}
      onSubmit={onSubmit}
      type={props.updatedMeal.type}
      mealName={mealName}
      mealNameHandler={mealNameHandler}
      mealIngredientsHandler={mealIngredientsHandler}
      mealIngredients={mealIngredients}
      mealDirections={mealDirections}
      mealDirectionsHandler={mealDirectionsHandler}
    />
  );
};

export default UpdateMeal;
