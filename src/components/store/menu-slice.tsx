import { createSlice } from "@reduxjs/toolkit";

import { MenuInitialState } from "../../types/menu";
const menuInitialState: MenuInitialState = {
  menuMeals: [],
  menuBreakfast: [],
  menuDinner: [],
  menuSupper: [],
  menuExtra: [],
  actionType: "",
  showModal: false,
  menuIsUpdated: true,
  mealToUpdate: {
    id: "",
    type: "",
    name: "",
    ingredients: "",
    directions: "",
  },
};

const menu = createSlice({
  name: "menu",
  initialState: menuInitialState,
  reducers: {
    getMenuMeals(state, action) {
      state.menuMeals = action.payload;
      if (action.payload.Breakfast) {
        state.menuBreakfast = Object.keys(action.payload.Breakfast).map(
          (key) => {
            return { id: key, ...action.payload.Breakfast[key] };
          }
        );
      } else {
        state.menuBreakfast = [];
      }
      if (action.payload.Dinner) {
        state.menuDinner = Object.keys(action.payload.Dinner).map((key) => {
          return { id: key, ...action.payload.Dinner[key] };
        });
      } else {
        state.menuDinner = [];
      }
      if (action.payload.Supper) {
        state.menuSupper = Object.keys(action.payload.Supper).map((key) => {
          return { id: key, ...action.payload.Supper[key] };
        });
      } else {
        state.menuSupper = [];
      }
      if (action.payload.Extra) {
        state.menuExtra = Object.keys(action.payload.Extra).map((key) => {
          return { id: key, ...action.payload.Extra[key] };
        });
      } else {
        state.menuExtra = [];
      }
    },
    updateMeal(state, action) {
      state.mealToUpdate = action.payload;
      state.actionType = "Update";
      state.showModal = true;
    },
    showModal(state, action) {
      state.actionType = action.payload;
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
      state.mealToUpdate = {
        id: "",
        type: "",
        name: "",
        ingredients: "",
        directions: "",
      };
    },
    updateMenu(state) {
      state.menuIsUpdated = !state.menuIsUpdated;
      state.mealToUpdate = {
        id: "",
        type: "",
        name: "",
        ingredients: "",
        directions: "",
      };
    },
  },
});

export const menuActions = menu.actions;

export default menu.reducer;
