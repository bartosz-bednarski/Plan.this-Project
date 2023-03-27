import { useLoaderData } from "react-router-dom";
import Tasks from "../components/tasks/Tasks";
const TasksPage = () => {
  const data = useLoaderData();
  return <Tasks weatherData={data} />;
};

export default TasksPage;
export const loader = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m&current_weather=true"
  );
  const data = await response.json();
  return data;
};
