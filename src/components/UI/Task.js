import classes from "./Task.module.css";
import { useState } from "react";
import TaskForm from "./TaskForm";
const Task = (props) => {
  const [taskIsModified, setTaskIsModified] = useState(false);
  const [enteredHours, setEnteredHours] = useState(props.time.slice(0, 2));
  const [enteredMinutes, setEnteredMinutes] = useState(props.time.slice(3));
  const [enteredDescription, setEnteredDescription] = useState(props.topic);

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };
  const minutesChangeHandler = (event) => {
    setEnteredMinutes(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const taskIsModifiedHandler = () => {
    setTaskIsModified(true);
    console.log(props.id);
  };
  const submitHandler = (event) => {};
  return (
    <li onClick={taskIsModifiedHandler} className={classes.task}>
      {!taskIsModified && (
        <>
          <span className={classes["task-time"]}>{props.time}</span>
          <span className={classes["task-topic"]}>{props.topic}</span>{" "}
        </>
      )}
      {taskIsModified && (
        <TaskForm
          onSubmit={submitHandler}
          hoursOnChange={hoursChangeHandler}
          hoursValue={enteredHours}
          minutesOnChange={minutesChangeHandler}
          minutesValue={enteredMinutes}
          descriptionOnChange={descriptionChangeHandler}
          descriptionValue={enteredDescription}
          type="modify"
        />
      )}
    </li>
  );
};

export default Task;
