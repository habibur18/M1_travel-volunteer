import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#ffffff" highlightColor="#cccccc">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SkeletonTheme>
  </React.StrictMode>
);
