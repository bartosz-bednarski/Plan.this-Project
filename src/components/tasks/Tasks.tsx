import classes from "./Tasks.module.css";
import TasksItem from "./TasksItem";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useAppDispatch } from "../store";
import { fetchTaskData } from "../store/task-actions";
import { useEffect } from "react";
import { useAppSelector } from "../store";
const Tasks: React.FC<{ weatherData: any }> = (props) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasksReducer.todayTasks);
  const date = useAppSelector((state) => state.tasksReducer.date);
  const dateReducer = useAppSelector((state) => state.dateReducer);
  const tasksAreUpdated = useAppSelector(
    (state) => state.tasksReducer.tasksAreUpdated
  );
  const userName = useAppSelector((state) => state.tasksReducer.userName);

  useEffect(() => {
    dispatch(fetchTaskData(date));
  }, [date, tasksAreUpdated]);

  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-box"]}>
        <div className={classes["hero-left"]}>
          <span className={classes["header-1"]}>Hello {userName}</span>
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
              <span className={classes.temperature}>
                {props.weatherData.current_weather.temperature} °C
              </span>
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
