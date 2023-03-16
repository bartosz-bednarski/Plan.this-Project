import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import FoodPage from "./pages/Food";
import TasksPage, { loader as tasksLoader } from "./pages/Tasks";
import RootLayout from "./pages/Root";
import ShoppingPage from "./pages/Shopping";
import SportPage from "./pages/Sport";
import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import AuthHomePage from "./pages/AuthHome";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <AuthHomePage />,
        children: [
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
            path: "menu",
            element: <MenuPage />,
          },
          { path: "shopping", element: <ShoppingPage /> },
        ],
      },
      {
        path: "/authentication",
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
