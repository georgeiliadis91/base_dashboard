import {
  useTriggerError,
  useTriggerSuccess,
  useTriggerWarning,
  useTriggerInfo,
} from "../../redux/alert/hooks";
import styles from "./Home.module.css";
interface Props {}

export const Home = (props: Props) => {
  const warningAlert = useTriggerWarning();
  const successAlert = useTriggerSuccess();
  const errorAlert = useTriggerError();
  const infoAlert = useTriggerInfo();

  return (
    <div>
      <h2>Home View</h2>
      {/* Toggle Alert example btns */}
      <h3>Toggle Alerts</h3>
      <div className={styles.alerts_area}>
        <button
          className={`${styles.btn} ${styles.warning}`}
          onClick={() => warningAlert("Warning Alert Message")}
        >
          Toggle Warning
        </button>
        <button
          className={`${styles.btn} ${styles.success}`}
          onClick={() => successAlert("Success Alert Message")}
        >
          Toggle Success
        </button>
        <button
          className={`${styles.btn} ${styles.error}`}
          onClick={() => errorAlert("Error Alert Message")}
        >
          Toggle Error
        </button>
        <button
          className={`${styles.btn} ${styles.info}`}
          onClick={() => infoAlert("Info Alert Message")}
        >
          Toggle Info
        </button>
      </div>
    </div>
  );
};
