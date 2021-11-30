import React from "react";
import styles from "./Paper.module.css";

interface IPaperProps {
  children: React.ReactNode;
}

export const Paper = ({ children }: IPaperProps) => {
  return <div className={styles.container}>{children}</div>;
};
