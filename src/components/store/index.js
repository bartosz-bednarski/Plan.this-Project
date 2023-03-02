import { configureStore } from "@reduxjs/toolkit";
import currentDate from "./date-slice";
import tasks from "./task-slice";
const store = configureStore({
  reducer: {
    dateReducer: currentDate,
    tasksReducer: tasks,
  },
});

export default store;
