import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./components/App";

ReactDOM.render(
  <RouterProvider router={appRouter} />,
  document.getElementById("root")
);
