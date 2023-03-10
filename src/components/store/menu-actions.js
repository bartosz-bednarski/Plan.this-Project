import { menuActions } from "./menu-slice";

export const fetchMenuData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const menuMealsData = await fetchData();

      await dispatch(menuActions.getMenuMeals(menuMealsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewMenuMeal = (newMeal) => {
  return async (dispatch) => {
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
      dispatch(menuActions.updateMenu());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateMenuMeal = (updatedMeal) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/menu/${updatedMeal.type}/${updatedMeal.id}.json `,
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
      dispatch(menuActions.updateMenu());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMenuMeal = (menuMeal) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/menu/${menuMeal.type}/${menuMeal.id}.json`,
        {
          method: "DELETE",
        }
      );
    };
    try {
      await sendRequest();
      dispatch(menuActions.updateMenu());
    } catch (error) {
      console.log(error);
    }
  };
};
