import React from "react";
import styles from "./SideBar.module.css";

interface Props {}

//dummy address list replace with real one
const addressList = Array.from({ length: 5 }, (_, index) => index);

export const SideBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {addressList.map((v, i) => {
          return <li className={styles.list_item}>{v}</li>;
        })}
      </ul>
    </div>
  );
};
