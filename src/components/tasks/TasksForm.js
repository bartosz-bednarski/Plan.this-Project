import classes from "./TasksForm.module.css";
import { useState } from "react";
import { updateTask, sendNewTask } from "../store/task-actions";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../store/task-slice";
const TasksForm = (props) => {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state.tasksReducer.taskToUpdate);
  const date = useSelector((state) => state.tasksReducer.date);
  // const [enteredHours, setEnteredHours] = useState(taskToUpdate.hours);
  // const [enteredMinutes, setEnteredMinutes] = useState(taskToUpdate.minutes);
  // const [enteredDescription, setEnteredDescription] = useState(
  //   taskToUpdate.topic
  // );

  // const hours = enteredHours.slice(0, 2);
  // const minutes = enteredMinutes.slice(3);
  // const hoursChangeHandler = (event) => {
  //   setEnteredHours(event.target.value);
  // };
  // const minutesChangeHandler = (event) => {
  //   setEnteredMinutes(event.target.value);
  // };
  // const descriptionChangeHandler = (event) => {
  //   setEnteredDescription(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    if (props.type === "Update") {
      dispatch(
        updateTask({
          time: `${props.hours}:${props.minutes}`,
          description: props.description,
          date: date,
          id: props.id,
        })
      );
      props.hideFormHandler();
    }
    if (props.type === "Add new task") {
      dispatch(
        sendNewTask({
          time: `${props.hours}:${props.minutes}`,
          description: props.description,
          date: date,
        })
      );
      props.resetInputs();
      props.hideFormHandler();
    }
  };
  return (
    <>
      <div className={classes["input-container"]}>
        <form onSubmit={onSubmit}>
          <div className={classes["input-box"]}>
            <input
              id="hours"
              type="number"
              name="hours"
              min={0}
              max={24}
              required
              onChange={props.hoursHandler}
              value={props.hours}
            />
            :
            <input
              id="minutes"
              type="number"
              name="minutes"
              min={0}
              max={60}
              required
              onChange={props.minutesHandler}
              value={props.minutes}
            />
            <input
              id="task"
              type="text"
              name="task"
              required
              onChange={props.descriptionHandler}
              value={props.description}
            />
          </div>
          <button>{props.type}</button>
        </form>

        {props.type === "Update" && (
          <button
            className={classes["task-cancel-btn"]}
            onClick={props.hideFormHandler}
          >
            Cancel
          </button>
        )}
        {props.type === "Add new task" && (
          <button
            className={classes["task-cancel-btn"]}
            onClick={props.hideFormHandler}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
};

export default TasksForm;
