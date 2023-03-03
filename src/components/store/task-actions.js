import { tasksActions } from "./task-slice";

export const fetchTaskData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const tasksData = await fetchData();
      dispatch(tasksActions.setTasks(tasksData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewTask = (newTask) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${newTask.date}.json `,
        {
          method: "POST",
          body: JSON.stringify({
            time: newTask.time,
            description: newTask.description,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
