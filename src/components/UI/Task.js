import classes from "./Task.module.css";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask, fetchTaskData } from "../store/task-actions";

const Task = (props) => {
  const [taskIsModified, setTaskIsModified] = useState(false);
  const [enteredHours, setEnteredHours] = useState(props.time.slice(0, 2));
  const [enteredMinutes, setEnteredMinutes] = useState(props.time.slice(3));
  const [enteredDescription, setEnteredDescription] = useState(props.topic);
  const date = useSelector((state) => state.dateReducer.dateTotal);
  const dispatch = useDispatch();
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
  const deleteTaskHandler = () => {
    const taskToDelete = {
      date: date,
      id: props.id,
    };
    dispatch(deleteTask(taskToDelete));
    setTaskIsModified(false);
    setTimeout(() => {
      dispatch(fetchTaskData(dispatch));
    }, 1000);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const task = {
      time: `${enteredHours}:${enteredMinutes}`,
      description: enteredDescription,
      date: date,
      id: props.id,
    };
    dispatch(updateTask(task));
    setTaskIsModified(false);
    setTimeout(() => {
      dispatch(fetchTaskData(dispatch));
    }, 1000);
  };
  //render doesnt work !!!
  return (
    <li onClick={taskIsModifiedHandler} className={classes.task}>
      {!taskIsModified && (
        <>
          <span className={classes["task-time"]}>{props.time}</span>
          <span className={classes["task-topic"]}>{props.topic}</span>{" "}
        </>
      )}
      {taskIsModified && (
        <>
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
          <button onClick={deleteTaskHandler}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Task;
