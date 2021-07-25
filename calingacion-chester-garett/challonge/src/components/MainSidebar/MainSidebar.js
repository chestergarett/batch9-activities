import classes from './MainSidebar.module.css';
import SidebarHeader from './SidebarHeader';
import SidebarDetails from './SidebarDetails';
import SidebarFooter from './SidebarFooter';

const MainSidebar = () => {
    return(
        <div className={classes.mainSidebar}>
            <div className={classes.sidebarHeader}>
                <SidebarHeader />
            </div>
            <div className={classes.sidebarDetails}>
                <SidebarDetails/>
            </div>
            <div className={classes.sidebarFooter}>
                <SidebarFooter />
            </div>
        </div>
    )
}

export default MainSidebar;
