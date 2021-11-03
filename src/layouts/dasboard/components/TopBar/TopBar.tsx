import React from "react";
import { BreadCrumbs } from "../../../../components/breadcrumbs/BreadCrumbs";
import { DropDown } from "../../../../components/dropdown/DropDown";
import styles from "./TopBar.module.css";
interface Props {}

export const TopBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs_container}>
        <BreadCrumbs/>
      </div>
      <div className={styles.user_menu_container}>
        <DropDown menuTitle="userName" menuElements={MenuList} />
      </div>
    </div>
  );
};

const MenuList = (
  <ul className={styles.menu_content_list}>
    <li>Menu</li>
    <li>Menu</li>
    <li>Menu</li>
  </ul>
);
