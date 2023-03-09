import { configureStore } from "@reduxjs/toolkit";
import currentDate from "./date-slice";
import tasks from "./task-slice";
import meals from "./meals-slice";
import menu from "./menu-slice";
const store = configureStore({
  reducer: {
    dateReducer: currentDate,
    tasksReducer: tasks,
    mealsReducer: meals,
    menuReducer: menu,
  },
});

export default store;
