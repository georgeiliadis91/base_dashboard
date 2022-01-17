import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux";
import { AppState } from "../../redux/reducers";
import styles from "./PublicLayout.module.css";

export const PublicLayout = () => {
  // const classes = useStyles();
  const { isAuthenticated } = useAppSelector((state: AppState) => state.user);

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
