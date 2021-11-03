import { useLocation } from 'react-router'
import { capitaliseFirstLetter } from '../../helpers/stringFormatting';
import styles from './BreadCrumbs.module.css'
interface Props {
    
}


//BreadCrumbs Component
export const BreadCrumbs: React.FC<Props> = () => {
    const routes = useLocation();
    
    //Get the pathname from the location object
    const breadcrumbs = routes.pathname.split('/').filter(x => x);


    return (
        <div className={styles.breadcrumbs_container}>
            {breadcrumbs.map((crumb, index) => {
                return <span className={styles.breadcrumbs}>{capitaliseFirstLetter(crumb)} {index !== breadcrumbs.length-1 && `-`}</span>})}
        </div>
    )
}