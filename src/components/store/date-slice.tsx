import { createSlice } from "@reduxjs/toolkit";

const currentDateInitialState = { dateTotal: "", month: "", day: "", date: "" };
const currentDate = createSlice({
  name: "date",
  initialState: currentDateInitialState,
  reducers: {
    setCurrentDate(state, action) {
      const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      state.dateTotal = action.payload.dateTotal.replace(/\s/g, "");
      state.month = months[action.payload.month];
      if (action.payload.day !== 0) {
        state.day = days[action.payload.day - 1];
      } else {
        state.day = "SUN";
      }

      state.date = action.payload.date;
    },
  },
});

export const currentDateActions = currentDate.actions;
export default currentDate.reducer;
