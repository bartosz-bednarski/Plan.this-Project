import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { currentDateActions } from "../store/date-slice";
import { tasksActions } from "../store/task-slice";
import { foodActions } from "../store/food-slice";
const CalendarComponent = () => {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());

  dispatch(
    currentDateActions.setCurrentDate({
      dateTotal: value.toDateString().replace(/\s/g, ""),
      month: value.getMonth(),
      day: value.getDay(),
      date: value.getDate(),
    })
  );
  dispatch(tasksActions.setDate(value.toDateString().replace(/\s/g, "")));
  dispatch(foodActions.setDate(value.toDateString().replace(/\s/g, "")));

  return (
    <CalendarContainer>
      <Calendar onChange={onChange} value={value} locale="en"></Calendar>
    </CalendarContainer>
  );
};

export default CalendarComponent;

const CalendarContainer = styled.div`
  width: auto;
  height: auto;

  padding: 1vh 1vw;
  margin: 0 auto;
  // background: rgba(255, 255, 255, 0.5);
  // border: 3px solid #f3066a;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;

  .react-calendar__navigation__label {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    margin: 1vh 0;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-decoration: none;
  }
  .react-calendar__month-view__days {
    margin: 1vh 0;
  }
  .react-calendar__month-view__days button {
    font-weight: 400;
    font-size: 20px;
  }
  .react-calendar button {
    background-color: transparent;
    color: black;
    padding: 1vh 1vw;
    box-shadow: none;
  }

  .react-calendar__tile--active abbr {
    color: #f3066a;
    font-weight: 800;
    font-size: 24px;
  }
`;
