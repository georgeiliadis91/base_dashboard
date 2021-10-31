import React from "react";
import { ActionTypes } from "../../redux/alert/actions";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { useTriggerClose } from "../../redux/alert/hooks";

export default function Alert() {
  const closeAlert = useTriggerClose();

  const { open, type, message } = useSelector((state: AppState) => state.alert);

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
        return "error";
      case ActionTypes.WARNING:
        return "warning";
      case ActionTypes.SUCCESS:
        return "success";
      case ActionTypes.INFO:
        return "info";
      default:
        return undefined;
    }
  };

  // in case message show error with severity
  if (open && message !== "") {
    return (
      <div className={`alert-message severityType()`}>
        <button onClick={handleClose} />
        {message}
      </div>
    );
  }

  return null;
}
