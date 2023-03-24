import classes from "./Tasks.module.css";
import TasksItem from "./TasksItem";
import CalendarComponent from "../UI/Calendar";
import Sticker from "../UI/Sticker";
import cloudyDay from "../../assets/cloudy_day.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { fetchTaskData } from "../store/task-actions";
import { useEffect } from "react";

const Tasks: React.FC = ({ weatherData }) => {
  const dispatch = useAppDispatch();
  const tasks = useSelector(
    (state: RootState) => state.tasksReducer.todayTasks
  );
  const date = useSelector((state: RootState) => state.tasksReducer.date);
  const dateReducer = useSelector((state: RootState) => state.dateReducer);
  const tasksAreUpdated = useSelector(
    (state: RootState) => state.tasksReducer.tasksAreUpdated
  );
  const userName = useSelector(
    (state: RootState) => state.tasksReducer.userName
  );

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
                {weatherData.current_weather.temperature} °C
              </span>
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};
//Fix the display tasks at currentDay
export default Tasks;
