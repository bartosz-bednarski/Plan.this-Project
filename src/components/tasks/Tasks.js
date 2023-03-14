import classes from "./Tasks.module.css";
import TasksItem from "./TasksItem";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { tasksActions } from "../store/task-slice";
import { fetchTaskData } from "../store/task-actions";
import { useEffect, useState } from "react";
import plusBtn from "../../assets/plus-btn.svg";
import TaskForm from "./TasksForm";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksReducer.todayTasks);
  const date = useSelector((state) => state.tasksReducer.date);
  const dateReducer = useSelector((state) => state.dateReducer);
  const tasksAreUpdated = useSelector(
    (state) => state.tasksReducer.tasksAreUpdated
  );

  useEffect(() => {
    dispatch(fetchTaskData(date));
  }, [date, tasksAreUpdated]);

  // const newTasks = Object.keys(tasks).map((key) => {
  //   return { id: key, ...tasks[key] };
  // });

  console.log(tasks);
  // console.log(newTasks);

  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-left"]}>
          <span className={classes["header-1"]}>Hello Adam</span>
          <span className={classes["header-2"]}>
            Let’s jump into a new day !
          </span>
          <ul className={classes["tasks-list"]}>
            {tasks.map((task) => (
              <TasksItem
                key={task.id}
                id={task.id}
                description={task.description}
                time={task.time}
                type="Update"
              />
            ))}
            <TasksItem type="Add new task" time={""} description={""} />
            {/* <li className={`${classes.task} ${classes["add-task"]}`}>
              {!showNewTaskForm && (
                <span
                  className={classes["plus-btn"]}
                  onClick={showNewTaskHandler}
                >
                  <img src={plusBtn} />
                </span>
              )}
              {showNewTaskForm && (
                <>
                  <Task
                    time={""}
                    description={""}
                    hideNewTaskHandler={hideNewTaskHandler}
                    type="Add new task"
                  />
                </>
              )}
            </li> */}
          </ul>
        </div>
        <div className={classes["hero-right"]}>
          <div className={classes["calendar-box"]}>
            <CalendarComponent />
          </div>

          <div className={classes["stickers-box"]}>
            <Sticker>
              <span className={classes["day-name"]}>{dateReducer.day}</span>
              <span className={classes["day-number"]}>{dateReducer.date}</span>
              <span className={classes["month-name"]}>{dateReducer.month}</span>
            </Sticker>
            <Sticker>
              <img src={cloudyDay} />
              <span className={classes.temperature}>23 °C</span>
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
//Fix the display tasks at currentDay
export default Tasks;
