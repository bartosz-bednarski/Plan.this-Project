import { foodActions } from "./food-slice";
import { getUserId } from "../../Firebase/authUser";
export const fetchMealsData = (date) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/meals/${date}.json`
      );
      const data = await response.json();
      return data;
    };
    try {
      const mealsData = await fetchData();
      dispatch(foodActions.getMeals(mealsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewMeal = (newMeal) => {
  console.log(newMeal);
  return async (dispatch) => {
    const sendRequest = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/meals/${newMeal.date}.json `,
        {
          method: "POST",
          body: JSON.stringify({
            type: newMeal.type,
            name: newMeal.name,
            ingredients: newMeal.ingredients,
            directions: newMeal.directions,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    try {
      await sendRequest();
      dispatch(foodActions.updateFood());
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateMeal = (updatedMeal) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/meals/${updatedMeal.date}/${updatedMeal.id}.json `,
        {
          method: "PUT",
          body: JSON.stringify({
            type: updatedMeal.type,
            name: updatedMeal.name,
            ingredients: updatedMeal.ingredients,
            directions: updatedMeal.directions,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    try {
      await sendRequest();
      dispatch(foodActions.updateFood());
    } catch (error) {
      console.log(error);
    }
  };
};
