import React from "react";
import { useDropdownMenu } from "../../hooks/useDropdownMenu";
import styles from "./DropDown.module.css";

interface Props {}

export const DropDown = (props: Props) => {
  const { ref, open, setOpen } = useDropdownMenu(false);

  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleDropDown}>menu</button>
      {open ? <div ref={ref}>menu item</div> : null}
    </div>
  );
};
