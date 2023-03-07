import { createSlice } from "@reduxjs/toolkit";

const mealsInitialState = { meals: [], date: "", todayMeals: [] };

const meals = createSlice({
  name: "meals",
  initialState: mealsInitialState,
  reducers: {
    getMeals(state, action) {
      state.meals = action.payload;
    },
    addMeal(state, action) {
      state.todayMeals = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const mealsActions = meals.actions;
export default meals.reducer;
