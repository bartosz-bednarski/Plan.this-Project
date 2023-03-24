import classes from "./TasksItem.module.css";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TasksForm from "./TasksForm";
import { useDispatch, useSelector } from "react-redux";
import plusBtn from "../../assets/plus-btn.svg";
import tickActiveBtn from "../../assets/tickActive.svg";
import tickDisabledBtn from "../../assets/tickDisabled.svg";
import { deleteTask } from "../store/task-actions";
import { RootState, useAppDispatch } from "../store";
import { TaskItem } from "../../types/tasks";
const TasksItem: React.FC<TaskItem> = (props) => {
  const dispatch = useAppDispatch();
  const date = useSelector((state: RootState) => state.tasksReducer.date);
  const [hours, setHours] = useState<string>(props.time.slice(0, 2));
  const [minutes, setMinutes] = useState<string>(props.time.slice(3));
  const [description, setDescription] = useState<string>(props.description);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [tickActive, setTickActive] = useState<boolean>(false);
  const [tickClicked, setTickClicked] = useState<boolean>(false);
  const tickActiveHandler = () => {
    setTickActive(true);
  };
  const tickDisabledHandler = () => {
    setTickActive(false);
  };
  const tickClickedHandler = () => {
    setTickClicked(true);
  };
  const hoursHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setHours(event.target.value);
  };
  const resetInputs = () => {
    setHours("");
    setMinutes("");
    setDescription("");
  };
  const minutesHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setMinutes(event.target.value);
  };

  const descriptionHandler = (event: React.FocusEvent<HTMLInputElement>) => {
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
                resetInputs={resetInputs}
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
