import React from "react";
import "./../styles/App.css";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Body from "./Body";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
export default App;
