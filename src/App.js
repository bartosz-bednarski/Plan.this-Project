import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import FoodPage from "./pages/Food";
import HomePage, {
  Action as AddTaskAction,
  loader as tasksLoader,
} from "./pages/Home";
import RootLayout from "./pages/Root";
import ShoppingPage from "./pages/Shopping";
import SportPage from "./pages/Sport";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: AddTaskAction,
        loader: tasksLoader,
      },
      { path: "sport", element: <SportPage /> },
      { path: "food", element: <FoodPage /> },
      { path: "shopping", element: <ShoppingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
