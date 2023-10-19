import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import AuthProvide from "./provider/AuthProvide";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvide>
  </React.StrictMode>
);
