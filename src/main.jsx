import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "../src/page/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("site-container")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
