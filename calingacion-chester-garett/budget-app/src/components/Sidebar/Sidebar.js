import SidebarSkills from './SidebarSkills';
import SidebarEndorsements from './SidebarEndorsements';
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.division}> 
                <h4>Skills</h4> 
                <SidebarSkills />
            </div>
            <div> 
                <h4>Endorsements </h4>
                <SidebarEndorsements />
            </div>
        </div>
    )
}


export default Sidebar;