import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/store";
import classes from "./index.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <body className={classes.body}>
    <Provider store={store}>
      <App />
    </Provider>
  </body>
);
