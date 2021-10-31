import React from "react";
import { Navigate } from "react-router-dom";

// Layouts for views
import { DashBoardLayout } from "../layouts/dasboard/DashBoardLayout";
import { PublicLayout } from "../layouts/public/PublicLayout";

// View Content Components
import { NotFound } from "./not_found/NotFound";
import { Login } from "./login/Login";
import { Home } from "./home/Home";

const routes = [
  {
    path: "app",
    element: <DashBoardLayout />,
    children: [
      { path: "/app/home", element: <Home /> },
      { path: "app/*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
