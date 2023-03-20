import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  todayTasks: [],
  date: "",
  tasksAreUpdated: false,
  userName: "",
};
const tasks = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    getTodayTasks(state, action) {
      if (action.payload !== null) {
        state.todayTasks = Object.keys(action.payload).map((key) => {
          return { id: key, ...action.payload[key] };
        });
      } else {
        state.todayTasks = [];
      }
    },
    // updateTask(state,action){
    setTasksAreUpdated(state) {
      state.tasksAreUpdated = !state.tasksAreUpdated;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.todayTasks = state.todayTasks.filter((item) => item.id !== id);
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const tasksActions = tasks.actions;
export default tasks.reducer;
