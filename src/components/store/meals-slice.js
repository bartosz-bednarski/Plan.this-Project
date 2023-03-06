import { createSlice } from "@reduxjs/toolkit";

const mealsInitialState = { meals: [], date: "", todayMeals: [] };

const meals = createSlice({
  name: "meals",
  initialState: mealsInitialState,
  reducers: {
    addMeal(state, action) {
      state.todayMeals = action.payload;
    },
  },
});

export const mealsActions = meals.actions;
export default meals.reducer;
