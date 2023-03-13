import classes from "./Task.module.css";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../store/task-slice";

const Task = (props) => {
  const dispatch = useDispatch();
  const formStatus = useSelector((state) => state.tasksReducer.formStatus);
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
  const taskIsEditingHandler = () => {
    // setTaskIsEditing(!taskIsEditing);
    dispatch(tasksActions.setFormIsShown());
    dispatch(
      tasksActions.updateTask({
        type: "Update",
        hours: hours,
        minutes: minutes,
        topic: props.topic,
      })
    );
    console.log(props.id);
  };
  const hours = props.time.slice(0, 2);
  const minutes = props.time.slice(3);
  console.log(hours, minutes);
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
    <li onClick={taskIsEditingHandler} className={classes.task}>
      {formStatus === "hidden" && (
        <>
          <span className={classes["task-time"]}>{props.time}</span>
          <span className={classes["task-topic"]}>{props.topic}</span>{" "}
        </>
      )}
      {formStatus === "displayed" && (
        <>
          <TaskForm />
        </>
      )}
    </li>
  );
};

export default Task;
