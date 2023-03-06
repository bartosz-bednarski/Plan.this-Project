import { mealsActions } from "./meals-slice";

export const fetchTaskData = () => {
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
      dispatch(mealsActions.setTasks(mealsData));
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
