import classes from "./TaskForm.module.css";
import { useState } from "react";
import { updateTask } from "../store/task-actions";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../store/task-slice";
const TaskForm = (props) => {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state.tasksReducer.taskToUpdate);
  const date = useSelector((state) => state.tasksReducer.date);
  const [enteredHours, setEnteredHours] = useState(taskToUpdate.hours);
  const [enteredMinutes, setEnteredMinutes] = useState(taskToUpdate.minutes);
  const [enteredDescription, setEnteredDescription] = useState(
    taskToUpdate.topic
  );

  // const hours = enteredHours.slice(0, 2);
  // const minutes = enteredMinutes.slice(3);
  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };
  const minutesChangeHandler = (event) => {
    setEnteredMinutes(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (taskToUpdate.type === "Update") {
      dispatch(
        updateTask({
          time: `${enteredHours}:${enteredMinutes}`,
          description: enteredDescription,
          date: date,
          id: props.id,
        })
      );
      dispatch(tasksActions.setFormIsHidden());
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div
        className={`${
          taskToUpdate.type === "add" && classes["input-container"]
        } ${
          taskToUpdate.type === "Update" && classes["input-container-modify"]
        }`}
      >
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

        <button>{taskToUpdate.type}</button>
      </div>
    </form>
  );
};

export default TaskForm;
