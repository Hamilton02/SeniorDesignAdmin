import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./stylesheets/index.css";
import Clients from "./pages/clients";
import Users from "./pages/users";

const router = createBrowserRouter([
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);