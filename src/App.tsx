import { useRoutes } from "react-router";
import styles from "./App.module.css";
import Alert from "./components/alerts/Alerts";
import routes from "./views/routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className={styles.root_container}>
      {routing}
      <Alert />
    </div>
  );
}

export default App;
