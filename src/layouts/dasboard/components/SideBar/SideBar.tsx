import React from "react";
import styles from "./SideBar.module.css";
import { getRouteList } from "../../../../helpers/dataFormatters";
import { Link } from "react-router-dom";
interface Props {}

//dummy address list replace with real one
// const addressList = Array.from({ length: 5 }, (_, index) => index);

export const SideBar = (props: Props) => {

  // get the route children for the sidebar 
  const routeList = getRouteList("app") || []

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>Logo goes here</div>
      <ul className={styles.list}>
        {routeList.map((v, i) => {
          return (
            <li key={i} className={styles.list_item}>
              <Link to={v}>{v}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
