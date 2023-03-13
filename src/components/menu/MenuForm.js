import { useState } from "react";
import classes from "./MenuForm.module.css";
import { sendNewMenuMeal, updateMenuMeal } from "../store/menu-actions";
import { useDispatch } from "react-redux";
import { menuActions } from "../store/menu-slice";
import { useSelector } from "react-redux";
const MenuForm = (props) => {
  const dispatch = useDispatch();
  const actionType = useSelector((state) => state.menuReducer.actionType);
  const mealToUpdate = useSelector((state) => state.menuReducer.mealToUpdate);
  const [type, setType] = useState(mealToUpdate.type);
  const [name, setName] = useState(mealToUpdate.name);
  const [ingredients, setIngredients] = useState(mealToUpdate.ingredients);
  const [directions, setDirections] = useState(mealToUpdate.directions);
  const [typeWarning, setTypeWarning] = useState("type-input");
  const typeHandler = (event) => {
    setType(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const ingredientsHandler = (event) => {
    setIngredients(event.target.value);
  };
  const directionsHandler = (event) => {
    setDirections(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      type !== "Breakfast" &&
      type !== "Dinner" &&
      type !== "Supper" &&
      type !== "Extra"
    ) {
      setTypeWarning("type-input-warning");
      console.log("error");
      return;
    }
    setTypeWarning("type-input");
    if (actionType === "Add") {
      dispatch(
        sendNewMenuMeal({
          type: type,
          name: name,
          ingredients: ingredients,
          directions: directions,
        })
      );
    }
    if (actionType === "Update") {
      dispatch(
        updateMenuMeal({
          id: mealToUpdate.id,
          type: type,
          name: name,
          ingredients: ingredients,
          directions: directions,
        })
      );
    }

    dispatch(menuActions.hideModal());

    console.log(type, name, ingredients, directions);
  };
  return (
    <div className={classes["form-container"]}>
      <form className={classes["form-box"]} onSubmit={onSubmit}>
        <label htmlFor="type">Type</label>

        <input
          id="typesInput"
          list="types"
          value={type}
          onChange={typeHandler}
          required
          className={classes[typeWarning]}
        />
        <datalist id="types">
          <option value="Breakfast" />
          <option value="Dinner" />
          <option value="Supper" />
          <option value="Extra" />
        </datalist>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={nameHandler}
          required
        />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={ingredientsHandler}
          required
        />
        <label htmlFor="directions">Directions</label>
        <textarea
          id="directions"
          type="text"
          value={directions}
          onChange={directionsHandler}
          required
        />
        <button>{actionType} meal</button>
      </form>
    </div>
  );
};

export default MenuForm;
