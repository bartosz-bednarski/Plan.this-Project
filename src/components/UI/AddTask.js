import { useState } from "react";
import classes from "./Task.module.css";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
const AddTask = ({ method, event }) => {
  const [newTask, setNewTask] = useState(false);
  const currentDay = useSelector((state) => state.dateReducer.dateTotal);
  const newTaskHandler = () => {
    setNewTask(!newTask);
  };

  return (
    <>
      {newTask && (
        <li className={`${classes.task} ${classes["add-task-form"]}`}>
          <Form method="post">
            <div className={classes["input-container"]}>
              <div className={classes["input-box"]}>
                <input
                  id="hours"
                  type="number"
                  name="hours"
                  min={0}
                  max={24}
                  required
                  defaultValue={event ? event.value : ""}
                />
                :
                <input
                  id="minutes"
                  type="number"
                  name="minutes"
                  min={0}
                  max={60}
                  required
                  defaultValue={event ? event.value : ""}
                />
                <input
                  id="task"
                  type="text"
                  name="task"
                  required
                  defaultValue={event ? event.value : ""}
                />
                <input
                  id="currentDay"
                  type="hidden"
                  name="currentDay"
                  value={currentDay}
                />
              </div>
              <button>Add new task</button>
            </div>
          </Form>
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
