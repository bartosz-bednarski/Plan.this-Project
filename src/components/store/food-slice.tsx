import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "../../types/food";
import { FoodInitialState } from "../../types/food";
const foodInitialState: FoodInitialState = {
  meals: [],
  date: "",
  todayMeals: [],
  Breakfast: { name: "", ingredients: "", directions: "" } as const,
  Dinner: { name: "", ingredients: "", directions: "" } as const,
  Supper: { name: "", ingredients: "", directions: "" } as const,
  Extra: { name: "", ingredients: "", directions: "" } as const,
  foodIsUpdated: true,
  displayMenu: { value: false, type: "", action: "", id: "" },
};

const food = createSlice({
  name: "food",
  initialState: foodInitialState,
  reducers: {
    getMeals(state, action) {
      state.displayMenu.value = false;
      if (action.payload === null) {
        console.log("null");
        state.todayMeals = [];
        state.Breakfast = { name: "", ingredients: "", directions: "" };
        state.Dinner = { name: "", ingredients: "", directions: "" };
        state.Supper = { name: "", ingredients: "", directions: "" };
        state.Extra = { name: "", ingredients: "", directions: "" };
      } else {
        state.todayMeals = Object.keys(action.payload).map((key) => {
          return { id: key, ...action.payload[key] };
        });
        if (
          state.todayMeals.find((key) => key.type === "Breakfast") === undefined
        ) {
          state.Breakfast = {
            name: "",
            ingredients: "",
            directions: "",
          };
        } else {
          state.Breakfast = state.todayMeals.find(
            (key) => key.type === "Breakfast"
          );
        }
        if (
          state.todayMeals.find((key) => key.type === "Dinner") === undefined
        ) {
          state.Dinner = { name: "", ingredients: "", directions: "" };
        } else {
          state.Dinner = state.todayMeals.find((key) => key.type === "Dinner");
        }
        if (
          state.todayMeals.find((key) => key.type === "Supper") === undefined
        ) {
          state.Supper = { name: "", ingredients: "", directions: "" };
        } else {
          state.Supper = state.todayMeals.find((key) => key.type === "Supper");
        }
        if (
          state.todayMeals.find((key) => key.type === "Extra") === undefined
        ) {
          state.Extra = { name: "", ingredients: "", directions: "" };
        } else {
          state.Extra = state.todayMeals.find((key) => key.type === "Extra");
        }
      }
    },
    addMeal(state, action) {
      state.todayMeals = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    updateFood(state) {
      state.foodIsUpdated = !state.foodIsUpdated;
    },

    setDisplayMenu(
      state,
      action: {
        type: string;
        payload: { type: string; action: string; id: string };
      }
    ) {
      state.displayMenu.value = !state.displayMenu.value;
      state.displayMenu.type = action.payload.type;
      state.displayMenu.action = action.payload.action;
      state.displayMenu.id = action.payload.id;
    },
  },
});

export const foodActions = food.actions;
export default food.reducer;
