import { Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { TopBar } from "./components/TopBar/TopBar";
import styles from "./DashBoardLayout.module.css";

interface Props {}

export const DashBoardLayout = (props: Props) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <TopBar />
        <div className={styles.view_container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
