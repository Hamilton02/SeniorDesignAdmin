import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./stylesheets/index.css";
import Clients from "./pages/clients";
import Users from "./pages/users";
import Reports from "./pages/reports";
import Client_Details from "./pages/client_details";
import User_Details from "./pages/user_details";

const router = createBrowserRouter([
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/client_details/:clientid",
    element: <Client_Details />,
  },
  {
    path: "/user_details/:userid",
    element: <User_Details />,
  },  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);