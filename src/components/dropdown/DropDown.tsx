import React from "react";
import { useDropdownMenu } from "../../hooks/useDropdownMenu";
import styles from "./DropDown.module.css";

interface Props {
  menuTitle?: string;
  menuElements: JSX.Element;
}

export const DropDown = ({ menuTitle = "menu", menuElements }: Props) => {
  const { btnRef, menuRef, open, setOpen } = useDropdownMenu(false);

  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button ref={btnRef} onClick={toggleDropDown}>
        {menuTitle}
      </button>
      {open ? (
        <div className={styles.floating_menu_container} ref={menuRef}>
          {menuElements}
        </div>
      ) : null}
    </div>
  );
};
