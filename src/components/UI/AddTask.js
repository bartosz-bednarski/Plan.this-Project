import { useState } from "react";
import classes from "./Task.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendNewTask } from "../store/task-actions";
import { fetchTaskData } from "../store/task-actions";
import { tasksActions } from "../store/task-slice";
import TaskForm from "./TaskForm";
const AddTask = () => {
  const date = useSelector((state) => state.dateReducer.dateTotal);
  const [newTask, setNewTask] = useState(false);

  const dispatch = useDispatch();
  const newTaskHandler = () => {
    setNewTask(!newTask);
  };
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredMinutes, setEnteredMinutes] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };
  const minutesChangeHandler = (event) => {
    setEnteredMinutes(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataToSend = {
      time: `${enteredHours}:${enteredMinutes}`,
      description: enteredDescription,
      date: date,
    };
    dispatch(sendNewTask(dataToSend));
    dispatch(tasksActions.addItem());
    setTimeout(() => {
      dispatch(fetchTaskData(dispatch));
    }, 1000);
  };
  return (
    <>
      {newTask && (
        <li className={`${classes.task} ${classes["add-task-form"]}`}>
          <TaskForm
            onSubmit={submitHandler}
            hoursOnChange={hoursChangeHandler}
            hoursValue={enteredHours}
            minutesOnChange={minutesChangeHandler}
            minutesValue={enteredMinutes}
            descriptionOnChange={descriptionChangeHandler}
            descriptionValue={enteredDescription}
            type="add"
          />
          {/* <form onSubmit={submitHandler}>
            <div className={classes["input-container"]}>
              <div className={classes["input-box"]}>
                <input
                  id="hours"
                  type="number"
                  name="hours"
                  min={0}
                  max={24}
                  required
                  onChange={hoursChangeHandler}
                  value={enteredHours}
                />
                :
                <input
                  id="minutes"
                  type="number"
                  name="minutes"
                  min={0}
                  max={60}
                  required
                  onChange={minutesChangeHandler}
                  value={enteredMinutes}
                />
                <input
                  id="task"
                  type="text"
                  name="task"
                  required
                  onChange={descriptionChangeHandler}
                  value={enteredDescription}
                />
              </div>
              <button>Add new task</button>
            </div>
          </form> */}
        </li>
      )}
      <li
        className={`${classes.task} ${classes["add-task"]}`}
        onClick={newTaskHandler}
      >
        {!newTask && (
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.plus}
          >
            <path
              d="M15.3394 2.63751L15.3394 27.6375"
              stroke="#2706F3"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="2.33936"
              y1="14.6375"
              x2="28.3394"
              y2="14.6375"
              stroke="#2706F3"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        )}
        {newTask && (
          <svg
            width="31"
            height="5"
            viewBox="0 0 31 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.plus}
          >
            <line
              x1="2.33936"
              y1="2.63751"
              x2="28.3394"
              y2="2.63751"
              stroke="#2706F3"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        )}
      </li>
    </>
  );
};

export default AddTask;
