import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import FoodPage from "./pages/Food";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ShoppingPage from "./pages/Shopping";
import SportPage from "./pages/Sport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
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
