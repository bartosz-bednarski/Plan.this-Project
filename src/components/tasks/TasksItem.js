import classes from "./TasksItem.module.css";
import { useState } from "react";
import TasksForm from "./TasksForm";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../store/task-slice";
import plusBtn from "../../assets/plus-btn.svg";
import tickActiveBtn from "../../assets/tickActive.svg";
import tickDisabledBtn from "../../assets/tickDisabled.svg";
const TasksItem = (props) => {
  const dispatch = useDispatch();
  const [hours, setHours] = useState(props.time.slice(0, 2));
  const [minutes, setMinutes] = useState(props.time.slice(3));
  const [description, setDescription] = useState(props.description);
  const [showForm, setShowForm] = useState(false);
  const [tickActive, setTickActive] = useState(false);
  const tickActiveHandler = () => {
    setTickActive(true);
  };
  const tickDisabledHandler = () => {
    setTickActive(false);
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
  console.log(hours, minutes);

  // const [taskIsEditing, setTaskIsEditing] = useState(false);
  // const [enteredHours, setEnteredHours] = useState(props.time.slice(0, 2));
  // const [enteredMinutes, setEnteredMinutes] = useState(props.time.slice(3));
  // const [enteredDescription, setEnteredDescription] = useState(props.topic);
  // const date = useSelector((state) => state.dateReducer.dateTotal);
  // const dispatch = useDispatch();
  // const hoursChangeHandler = (event) => {
  //   setEnteredHours(event.target.value);
  // };
  // const minutesChangeHandler = (event) => {
  //   setEnteredMinutes(event.target.value);
  // };
  // const descriptionChangeHandler = (event) => {
  //   setEnteredDescription(event.target.value);
  // };
  const showFormHandler = () => {
    // setTaskIsEditing(!taskIsEditing);
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };
  // const deleteTaskHandler = () => {
  //   const taskToDelete = {
  //     date: date,
  //     id: props.id,
  //   };
  //   dispatch(deleteTask(taskToDelete));
  //   setTaskIsModified(false);
  //   setTimeout(() => {
  //     dispatch(fetchTaskData(dispatch));
  //   }, 1000);
  // };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const task = {
  //     time: `${enteredHours}:${enteredMinutes}`,
  //     description: enteredDescription,
  //     date: date,
  //     id: props.id,
  //   };
  //   dispatch(updateTask(task));
  //   setTaskIsModified(false);
  //   setTimeout(() => {
  //     dispatch(fetchTaskData(dispatch));
  //   }, 1000);
  // };
  //render doesnt work !!!
  return (
    <>
      {props.type === "Update" && (
        <li className={classes.task}>
          {!showForm && (
            <>
              <img
                className={classes.tick}
                src={tickActive ? tickActiveBtn : tickDisabledBtn}
                onMouseOver={tickActiveHandler}
                onMouseOut={tickDisabledHandler}
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
