import { tasksActions } from "./task-slice";
import { getUserId } from "../../Firebase/authUser";
import { AppDispatch } from ".";
import { SendUpdateTask } from "../../types/tasks";
export const fetchTaskData = (date: string) => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/tasks/${date}.json`
      );
      const data = await response.json();
      return data;
    };
    try {
      const tasksData = await fetchData();
      dispatch(tasksActions.getTodayTasks(tasksData));
    } catch (error) {
      console.log(error);
    }
    const fetchUserBio = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/bio.json`
      );
      const data = await response.json();
      return data;
    };
    try {
      const userData = await fetchUserBio();
      if (userData != null) {
        const userName = Object.values(userData)[0].name;
        dispatch(tasksActions.setUserName(userName));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewTask = (newTask: SendUpdateTask) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/tasks/${newTask.date}.json `,
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
      dispatch(tasksActions.setTasksAreUpdated());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (task: SendUpdateTask) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/tasks/${task.date}/${task.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            time: task.time,
            description: task.description,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    try {
      await sendRequest();
      dispatch(tasksActions.setTasksAreUpdated());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (task: { date: string; id: string | undefined }) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const userId = getUserId();
      const response = await fetch(
        `https://planthis-54a89-default-rtdb.europe-west1.firebasedatabase.app/${userId}/tasks/${task.date}/${task.id}.json`,
        {
          method: "DELETE",
        }
      );
    };
    try {
      await sendRequest();
      dispatch(tasksActions.setTasksAreUpdated());
    } catch (error) {
      console.log(error);
    }
  };
};
