import { configureStore } from "@reduxjs/toolkit";
import currentDate from "./date-slice";
import tasks from "./task-slice";
import food from "./food-slice";
import menu from "./menu-slice";
const store = configureStore({
  reducer: {
    dateReducer: currentDate,
    tasksReducer: tasks,
    foodReducer: food,
    menuReducer: menu,
  },
});

export default store;
