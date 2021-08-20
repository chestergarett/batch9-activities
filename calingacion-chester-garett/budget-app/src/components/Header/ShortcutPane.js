import { Link } from "react-router-dom";

import {IconContext} from 'react-icons';
import classes from './ShortcutPane.module.css'
import {IoHomeOutline} from 'react-icons/io5';
import {IoPlayCircleOutline} from 'react-icons/io5';
import {IoCalendarOutline} from 'react-icons/io5';
import Tooltip from '@material-ui/core/Tooltip';


const ShortcutPane = () =>{
    return (
        <div className={classes.shortcut} data-testid="shortcuts">
            <IconContext.Provider value={{size: '30', color: 'black'}}>
                <Link to='/'>
                    <Tooltip title="Home">
                        <div className={`${classes.iconsGroup} ${classes.selected}`}>
                            <IoHomeOutline className={classes.icons} color='green'/>
                            <span className={classes.circle1}><span>3</span></span>
                        </div>
                    </Tooltip>
                </Link>
                <Tooltip title="this feature will come out soon!">
                    <div className={classes.iconsGroup}>
                        <IoPlayCircleOutline className={classes.icons}/>
                        <span className={classes.circle2}>9+</span>
                    </div>
                </Tooltip>
                <Tooltip title="this feature will come out soon!">
                    <div className={classes.iconsGroup}>
                        <IoCalendarOutline className={classes.icons}/>
                        <span className={classes.circle3}>4</span>
                    </div>
                </Tooltip>
            </IconContext.Provider>
        </div>
        )
};

export default ShortcutPane;