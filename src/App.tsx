import { useRoutes } from "react-router";
import "./App.css";
import Alert from "./components/alerts/Alerts";
import routes from "./views/routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="dashboard-app-root">
      {routing}
      <Alert />
    </div>
  );
}

export default App;
