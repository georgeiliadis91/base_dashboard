import React from "react";
import { DropDown } from "../../../../components/dropdown/DropDown";
import styles from "./TopBar.module.css";
interface Props {}

export const TopBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs_container}>
        bread / crumbs / go / here
      </div>
      <div className={styles.user_menu_container}>
        <DropDown />
      </div>
    </div>
  );
};
