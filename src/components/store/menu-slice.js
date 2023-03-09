import { createSlice } from "@reduxjs/toolkit";

const menuInitialState = { actionType: "", showModal: false };

const menu = createSlice({
  name: "menu",
  initialState: menuInitialState,
  reducers: {
    showModal(state, action) {
      state.actionType = action.payload;
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
    },
  },
});

export const menuActions = menu.actions;

export default menu.reducer;
