import classes from "./TaskForm.module.css";
const TaskForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div
        className={`${props.type === "add" && classes["input-container"]} ${
          props.type === "modify" && classes["input-container-modify"]
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
            onChange={props.hoursOnChange}
            value={props.hoursValue}
          />
          :
          <input
            id="minutes"
            type="number"
            name="minutes"
            min={0}
            max={60}
            required
            onChange={props.minutesOnChange}
            value={props.minutesValue}
          />
          <input
            id="task"
            type="text"
            name="task"
            required
            onChange={props.descriptionOnChange}
            value={props.descriptionValue}
          />
        </div>

        {props.type === "add" && <button>Add task</button>}
        {props.type === "modify" && <button>Modify</button>}
      </div>
    </form>
  );
};

export default TaskForm;
