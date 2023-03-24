import classes from "./TasksForm.module.css";
import { updateTask, sendNewTask } from "../store/task-actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import React from "react";
import { TaskForm } from "../../types/tasks";
const TasksForm: React.FC<TaskForm> = (props) => {
  const dispatch = useAppDispatch();
  const date = useSelector((state: RootState) => state.tasksReducer.date);
  const onSubmit = (event: React.FormEvent) => {
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
          <button className={classes["add-update-btn"]}>
            {props.type === "Add new task" ? "Add new" : `${props.type}`}
          </button>
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
