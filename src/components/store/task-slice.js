import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = { tasks: [] };
const tasks = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== id);
    },
  },
});

export const tasksActions = tasks.actions;
export default tasks.reducer;
