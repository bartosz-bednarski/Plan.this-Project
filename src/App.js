import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import FoodPage from "./pages/Food";
import TasksPage, { loader as tasksLoader } from "./pages/Tasks";
import RootLayout from "./pages/Root";
import ShoppingPage from "./pages/Shopping";
import SportPage from "./pages/Sport";
import MenuPage from "./pages/Menu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TasksPage />,
      },
      { path: "sport", element: <SportPage /> },
      {
        path: "food",
        element: <FoodPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      { path: "shopping", element: <ShoppingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
