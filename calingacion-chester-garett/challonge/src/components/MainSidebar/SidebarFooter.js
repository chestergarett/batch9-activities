import {FaRegUserCircle} from 'react-icons/fa';
import {IoMic} from 'react-icons/io5';
import {IoMdHeadset} from 'react-icons/io';
import {IoSettingsSharp} from 'react-icons/io5'
import classes from './SidebarFooter.module.css';

const DUMMY_USER = {
    name: 'DUMMY_USER'
}

const SidebarFooter = () => {

    return(
        <div className={classes.footer}>
            <div className={classes.user}>
                <FaRegUserCircle />
                <span>{DUMMY_USER.name}</span>
            </div>
            <div className={classes.icons}>
                <IoMic />
                <IoMdHeadset/>
                <IoSettingsSharp/>
            </div>
        </div>
    )
}

export default SidebarFooter;