import classes from "./Task.module.css";
import { useState } from "react";
const Task = (props) => {
  const [taskIsDone, setTaskIsDone] = useState(false);
  const taskIsDoneHandler = () => {
    setTaskIsDone(!taskIsDone);
  };
  return (
    <li
      onClick={taskIsDoneHandler}
      className={`${classes.task} ${taskIsDone && classes["task-done"]}`}
    >
      <span className={classes["task-time"]}>{props.time}</span>
      <span className={classes["task-topic"]}>{props.topic}</span>
    </li>
  );
};

export default Task;
