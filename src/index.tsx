import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout";
import { Routes } from "./constants/Routes";
import Home from "./layout/Home";


// sass installation: npm install node-sass

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
   
    ],
  },
]);

root.render(
    <RouterProvider router={router} />
);
