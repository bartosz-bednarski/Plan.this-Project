import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  todayTasks: [],
  date: "",
  formStatus: "hidden",
  taskToUpdate: {},
  tasksAreUpdated: false,
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
      }
    },
    // updateTask(state,action){
    updateTask(state, action) {
      state.taskToUpdate = action.payload;
    },
    setTasksAreUpdated(state, action) {
      state.tasksAreUpdated = !state.tasksAreUpdated;
    },
    setFormIsShown(state, action) {
      state.formStatus = "displayed";
    },
    setFormIsHidden(state) {
      state.formStatus = "hidden";
    },
    // }
    addItem(state) {
      state.firstLoad = false;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.todayTasks = state.todayTasks.filter((item) => item.id !== id);
    },
  },
});

export const tasksActions = tasks.actions;
export default tasks.reducer;
