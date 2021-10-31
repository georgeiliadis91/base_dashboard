import { Outlet, Navigate } from "react-router-dom";
import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import styles from "./PublicLayout.module.css";

export const PublicLayout = () => {
  // const classes = useStyles();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if (isAuthenticated) {
    return <Navigate to={`app/`} />;
  } else {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    );
  }
};
