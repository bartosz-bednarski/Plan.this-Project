import { tasksActions } from "./task-slice";

export const fetchTaskData = (date) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${date}.json`
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
      dispatch(tasksActions.setTasksAreUpdated());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (task) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.date}/${task.id}.json`,
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

export const deleteTask = (task) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.date}/${task.id}.json`,
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
