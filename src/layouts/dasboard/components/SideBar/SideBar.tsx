import React from "react";
import styles from "./SideBar.module.css";

interface Props {}

//dummy address list replace with real one
const addressList = Array.from({ length: 5 }, (_, index) => index);

export const SideBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>Logo goes here</div>
      <ul className={styles.list}>
        {addressList.map((v, i) => {
          return (
            <li key={i} className={styles.list_item}>
              NavigationItem - {v}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
