// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import pages
import Home from "./pages/Home";
import Notices from "./pages/Notices";
import Members from "./pages/Members";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/notices", element: <Notices /> },
      { path: "/members", element: <Members /> },
      { path: "/profile", element: <Profile /> },
      { path: "/settings", element: <Settings /> },
      { path: "/admin", element: <AdminLogin /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
