import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { capitaliseFirstLetter } from "../../helpers/stringFormatting";
import styles from "./BreadCrumbs.module.css";
interface Props {}

//BreadCrumbs Component
export const BreadCrumbs: React.FC<Props> = () => {
  const routes = useLocation();

  //Get the pathname from the location object
  const breadcrumbs = routes.pathname.split("/").filter((x) => x);

  return (
    <div className={styles.breadcrumbs_container}>
      {breadcrumbs.map((crumb, index) => {
        const crumbLabel = capitaliseFirstLetter(crumb);
        return (
          <span key={`${crumb}-{index}`} className={styles.breadcrumbs}>
            {index > 0 ? (
              <Link to={crumb}>{crumbLabel}</Link>
            ) : (
              <span>{crumbLabel}</span>
            )}{" "}
            {index !== breadcrumbs.length - 1 && `-`}
          </span>
        );
      })}
    </div>
  );
};
