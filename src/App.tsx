import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import FoodPage from "./pages/Food";
import TasksPage, { loader as tasksLoader } from "./pages/Tasks";
import RootLayout from "./pages/Root";
import ShoppingPage from "./pages/Shopping";
import SportPage from "./pages/Sport";
import MenuPage from "./pages/Menu";
import WelcomePage from "./pages/Welcome";
import HomeLayout from "./pages/HomeLayout";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { checkUserAuthentication, getUserStatus } from "./Firebase/authUser";
import HomePage from "./pages/Home";

const router = createHashRouter([
  {
    path: "/*",
    element: <RootLayout />,
    loader: getUserStatus,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "auth",
        element: <HomeLayout />,
        loader: checkUserAuthentication,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "tasks",
            element: <TasksPage />,
            loader: tasksLoader,
          },
          { path: "sport", element: <SportPage /> },
          {
            path: "food",
            element: <FoodPage />,
          },
          {
            path: "food/menu",
            element: <MenuPage />,
          },
          { path: "shopping", element: <ShoppingPage /> },
        ],
      },
      {
        path: "authentication",
        element: <AuthenticationPage />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
