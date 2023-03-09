import { mealsActions } from "./meals-slice";

export const fetchMealsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const mealsData = await fetchData();
      dispatch(mealsActions.getMeals(mealsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewMeal = (newMeal) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/meals/${newMeal.date}.json `,
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
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateMeal = (updatedMeal) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/meals/${updatedMeal.date}/${updatedMeal.id}.json `,
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
    } catch (error) {
      console.log(error);
    }
  };
};
export const sendNewMenuMeal = (newMeal) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/menu/${newMeal.type}.json `,
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
    } catch (error) {
      console.log(error);
    }
  };
};
