import { RiArrowDropDownLine } from 'react-icons/ri';
import classes from './SidebarHeader.module.css';

const SidebarHeader = () => {

    return(
    <div className={classes.header}>
        <div className={classes.heading}>
            DUMMY_SERVER
        </div>
        <div className={classes.toggle}>
            <RiArrowDropDownLine size={32}/>
        </div>
    </div>
    )
}

export default SidebarHeader;