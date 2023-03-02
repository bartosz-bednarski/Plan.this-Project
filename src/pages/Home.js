import { redirect } from "react-router-dom";
import Home from "../components/Header/Home";
const HomePage = () => {
  return <Home />;
};

export default HomePage;
export const Action = async ({ request, params }) => {
  const data = await request.formData();
  const time = `${data.get("hours")}:${data.get("minutes")}`;
  const currentDay = data.get("currentDay");
  const eventData = {
    time: time,
    description: data.get("task").replace(/\s/g, ""),
  };

  const response = fetch(
    `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${currentDay.replace(
      /\s/g,
      ""
    )}.json `,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }
  );
  return redirect("/");
};

export const loader = async () => {
  const response = await fetch(
    "https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
  );
  const data = await response.json();
  return data;
};
