import classes from "./Home.module.css";
import Task from "../UI/Task";
import AddTask from "../UI/AddTask";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { tasksActions } from "../store/task-slice";
const DUMMY_ARRAY = [
  { id: "task1", time: "07:00 - 08:00", topic: "Training" },
  { id: "task2", time: "08:00 - 09:00", topic: "Breakfast" },
  { id: "task3", time: "10:00 - 15:00", topic: "Work" },
  { id: "task4", time: "17:00 - 18:00", topic: "Shopping" },
  { id: "task1", time: "20:00 - 21:00", topic: "Running" },
];

const Home = () => {
  const date = useSelector((state) => state.dateReducer);
  const dateShort = date.dateTotal.replace(/\s/g, "");

  const tasksData = useLoaderData();
  // const newTasks = Object.entries(tasksData).map((e) => ({ [e[0]]: e[1] }));
  // const superO = newTasks.filter((item) => {
  //   return item === "-NPRqlvz0gXnZpRbQUSm";
  // });
  const currentDay = Object.keys(tasksData)
    .filter((key) => key.includes(dateShort))
    .reduce((obj, key) => {
      return Object.assign(obj, {
        ...tasksData[key],
      });
    }, {});
  const newTasks = Object.keys(currentDay).map((key) => {
    return { id: key, ...currentDay[key] };
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
  console.log(currentDay);
  console.log(newTasks);

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
