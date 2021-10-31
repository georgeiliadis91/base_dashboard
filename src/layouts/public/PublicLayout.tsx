import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const PublicLayout = () => {
  // const classes = useStyles();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if (isAuthenticated) {
    return <Navigate to={`app/`} />;
  } else {
    return (
      <div className="root">
        <main className="content">
          <Outlet />
        </main>
      </div>
    );
  }
};
