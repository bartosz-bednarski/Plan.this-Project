import classes from "./Home.module.css";
import Task from "../UI/Task";
import AddTask from "../UI/AddTask";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { tasksActions } from "../store/task-slice";
import { fetchTaskData } from "../store/task-actions";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const firstLoad = useSelector((state) => state.tasksReducer.firstLoad);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const date = useSelector((state) => state.dateReducer);
  const dateTotal = date.dateTotal;
  console.log(date);
  const loaderData = useLoaderData();
  const tasksData = firstLoad ? loaderData : tasks;
  useEffect(() => {
    dispatch(fetchTaskData(dispatch));
  }, [dispatch]);
  // const newTasks = Object.entries(tasksData).map((e) => ({ [e[0]]: e[1] }));
  // const superO = newTasks.filter((item) => {
  //   return item === "-NPRqlvz0gXnZpRbQUSm";
  // });
  const activeDayTasks = Object.keys(tasksData)
    .filter((key) => key.includes(dateTotal))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        ...tasksData[key],
      });
    }, {});
  const newTasks = Object.keys(activeDayTasks).map((key) => {
    return { id: key, ...activeDayTasks[key] };
  });
  // const dispatch = useDispatch();
  // dispatch(tasksActions.setTasks(newTasks));
  // const tasks = useSelector((state) => state.tasksReducer.tasks);
  // console.log(tasks);
  // const newTasks = Object.values(currentDay);
  // for (let key of keysArray) {
  //   Object.assign(newTasks, { ...currentDay[key] });
  // }

  // = Object.keys(currentDay).reduce((obj, key) => {
  //   return Object.assign(obj, {
  //     ...currentDay[key],
  //   });
  // }, {});
  console.log(tasksData);
  console.log(activeDayTasks);
  console.log(newTasks);
  // console.log(firstLoad);

  // console.log(currentTasks);
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-left"]}>
          <span className={classes["header-1"]}>Hello Adam</span>
          <span className={classes["header-2"]}>
            Let’s jump into a new day !
          </span>
          <ul className={classes["tasks-list"]}>
            {newTasks.map((task) => (
              <Task id={task.id} time={task.time} topic={task.description} />
            ))}
            <AddTask />
          </ul>
        </div>
        <div className={classes["hero-right"]}>
          <CalendarComponent />
          <div className={classes["stickers-box"]}>
            <Sticker>
              <span className={classes["day-name"]}>{date.day}</span>
              <span className={classes["day-number"]}>{date.date}</span>
              <span className={classes["month-name"]}>{date.month}</span>
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
export default Home;
