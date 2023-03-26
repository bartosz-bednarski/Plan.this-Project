import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
