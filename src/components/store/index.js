import { configureStore } from "@reduxjs/toolkit";
import currentDate from "./date-slice";
const store = configureStore({
  reducer: {
    dateReducer: currentDate,
  },
});

export default store;
