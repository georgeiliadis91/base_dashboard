import React from "react";
import { ActionTypes } from "../../redux/alert/reducer";
import { AppState } from "../../redux/reducers";
import { useTriggerClose } from "../../redux/alert/hooks";
import styles from "./Alert.module.css";
import { useAppSelector } from "../../redux";
export default function Alert() {
  const closeAlert = useTriggerClose();

  const { open, type, message } = useAppSelector(
    (state: AppState) => state.alert
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    closeAlert();
  };

  // CLOSE is skipped intentionality cause we want undefined to be a type based on the requirements of the application
  const severityType = () => {
    switch (type) {
      case ActionTypes.ERROR:
        return styles.error;
      case ActionTypes.WARNING:
        return styles.warning;
      case ActionTypes.SUCCESS:
        return styles.success;
      case ActionTypes.INFO:
        return styles.info;
      default:
        return "";
    }
  };

  // in case message show error with severity
  if (open && message !== "") {
    return (
      <div className={`${styles.alert_message} ${severityType()}`}>
        <div className={styles.msg_container}>
          <span>{message}</span>
          <button className={styles.close_alert_btn} onClick={handleClose}>
            X
          </button>
        </div>
      </div>
    );
  }

  return null;
}
