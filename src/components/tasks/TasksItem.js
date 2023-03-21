import classes from "./TasksItem.module.css";
import { useState } from "react";
import TasksForm from "./TasksForm";
import { useDispatch, useSelector } from "react-redux";
import plusBtn from "../../assets/plus-btn.svg";
import tickActiveBtn from "../../assets/tickActive.svg";
import tickDisabledBtn from "../../assets/tickDisabled.svg";
import { deleteTask } from "../store/task-actions";
const TasksItem = (props) => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.tasksReducer.date);
  const [hours, setHours] = useState(props.time.slice(0, 2));
  const [minutes, setMinutes] = useState(props.time.slice(3));
  const [description, setDescription] = useState(props.description);
  const [showForm, setShowForm] = useState(false);
  const [tickActive, setTickActive] = useState(false);
  const [tickClicked, setTickClicked] = useState(false);
  const tickActiveHandler = () => {
    setTickActive(true);
  };
  const tickDisabledHandler = () => {
    setTickActive(false);
  };
  const tickClickedHandler = () => {
    setTickClicked(true);
  };
  const hoursHandler = (event) => {
    setHours(event.target.value);
  };
  const resetInputs = () => {
    setHours("");
    setMinutes("");
    setDescription("");
  };
  const minutesHandler = (event) => {
    setMinutes(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const removeTask = () => {
    tickClickedHandler();
    setTimeout(() => {
      dispatch(deleteTask({ date: date, id: props.id }));
    }, 500);
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };
  return (
    <>
      {props.type === "Update" && (
        <li
          className={`${classes.task} ${tickClicked && classes["task-delete"]}`}
        >
          {!showForm && (
            <>
              <img
                className={classes.tick}
                src={
                  tickClicked
                    ? tickActiveBtn
                    : tickActive
                    ? tickActiveBtn
                    : tickDisabledBtn
                }
                onMouseOver={tickActiveHandler}
                onMouseOut={tickDisabledHandler}
                onClick={removeTask}
              />
              <span onClick={showFormHandler}>
                <span className={classes["task-time"]}>{props.time}</span>
                <span className={classes["task-topic"]}>
                  {props.description}
                </span>
              </span>
            </>
          )}

          {showForm && (
            <>
              <TasksForm
                id={props.id}
                hours={hours}
                minutes={minutes}
                description={description}
                hoursHandler={hoursHandler}
                minutesHandler={minutesHandler}
                descriptionHandler={descriptionHandler}
                type="Update"
                hideFormHandler={hideFormHandler}
              />
            </>
          )}
        </li>
      )}
      {props.type === "Add new task" && (
        <li className={`${classes.task} ${classes["add-task"]}`}>
          {!showForm && (
            <span className={classes["plus-btn"]} onClick={showFormHandler}>
              <img src={plusBtn} />
            </span>
          )}
          {showForm && (
            <>
              <TasksForm
                hours={hours}
                minutes={minutes}
                description={description}
                hoursHandler={hoursHandler}
                minutesHandler={minutesHandler}
                descriptionHandler={descriptionHandler}
                type="Add new task"
                hideFormHandler={hideFormHandler}
                resetInputs={resetInputs}
              />
            </>
          )}
        </li>
      )}
    </>
  );
};

export default TasksItem;
