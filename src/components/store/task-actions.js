import { tasksActions } from "./task-slice";
import { getFirestore } from "firebase/firestore";
import app from "../../Firebase/firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { getUserId } from "../../Firebase/authUser";
export const fetchTaskData = (date) => {
  return async (dispatch) => {
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
  };
};

export const sendNewTask = (newTask) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      // const db = getFirestore(app);
      const userId = getUserId();
      // setDoc(doc(db, "users", userId), {
      //   tasks: {
      //     [newTask.date]: {
      //       time: newTask.time,
      //       description: newTask.description,
      //     },
      //   },
      // });
      //   const response = await fetch(
      //     `https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks/${newTask.date}.json `,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         time: newTask.time,
      //         description: newTask.description,
      //       }),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      // };
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

export const updateTask = (task) => {
  return async (dispatch) => {
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

export const deleteTask = (task) => {
  return async (dispatch) => {
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
