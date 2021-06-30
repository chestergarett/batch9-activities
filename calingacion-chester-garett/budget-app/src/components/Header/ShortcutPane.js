import { Link } from "react-router-dom";

import {IconContext} from 'react-icons';
import classes from './ShortcutPane.module.css'
import {IoHomeOutline} from 'react-icons/io5';
import {IoPlayCircleOutline} from 'react-icons/io5';
import {IoCalendarOutline} from 'react-icons/io5';


const ShortcutPane = () =>{
    return (
        <div className={classes.shortcut}>
            <IconContext.Provider value={{size: '30', color: 'black'}}>
                <Link to='/'>
                    <div className={`${classes.iconsGroup} ${classes.selected}`}><IoHomeOutline className={classes.icons} color='green'/><span className={classes.circle1}><span>3</span></span></div>
                </Link>
                    <div className={classes.iconsGroup}><IoPlayCircleOutline className={classes.icons}/><span className={classes.circle2}>9+</span></div>
                    <div className={classes.iconsGroup}><IoCalendarOutline className={classes.icons}/><span className={classes.circle3}>4</span></div>
            </IconContext.Provider>
        </div>
        )
};

export default ShortcutPane;