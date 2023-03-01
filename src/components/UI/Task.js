import classes from "./Task.module.css";
const Task = (props) => {
  return (
    <li className={classes.task}>
      <span className={classes["task-time"]}>{props.time}</span>
      <span className={classes["task-topic"]}>{props.topic}</span>
    </li>
  );
};

export default Task;
