import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = { tasks: [], date: " ", firstLoad: true };
const tasks = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addItem(state) {
      state.firstLoad = false;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== id);
    },
  },
});

export const tasksActions = tasks.actions;
export default tasks.reducer;
