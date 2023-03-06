import { configureStore } from "@reduxjs/toolkit";
import currentDate from "./date-slice";
import tasks from "./task-slice";
import meals from "./meals-slice";
const store = configureStore({
  reducer: {
    dateReducer: currentDate,
    tasksReducer: tasks,
    mealsReducer: meals,
  },
});

export default store;
