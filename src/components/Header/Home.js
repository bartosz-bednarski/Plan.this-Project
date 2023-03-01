import classes from "./Home.module.css";
import Task from "../UI/Task";
import AddTask from "../UI/AddTask";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
const DUMMY_ARRAY = [
  { id: "task1", time: "07:00 - 08:00", topic: "Training" },
  { id: "task2", time: "08:00 - 09:00", topic: "Breakfast" },
  { id: "task3", time: "10:00 - 15:00", topic: "Work" },
  { id: "task4", time: "17:00 - 18:00", topic: "Shopping" },
  { id: "task1", time: "20:00 - 21:00", topic: "Running" },
];

const Home = () => {
  const tasks = useLoaderData();
  const currentTasks = [tasks];
  console.log(tasks);
  console.log(currentTasks);
  const date = useSelector((state) => state.dateReducer);
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-left"]}>
          <span className={classes["header-1"]}>Hello Adam</span>
          <span className={classes["header-2"]}>
            Let’s jump into a new day !
          </span>
          <ul className={classes["tasks-list"]}>
            {DUMMY_ARRAY.map((task) => (
              <Task time={task.time} topic={task.topic} />
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
