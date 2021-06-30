import classes from './InfoPane.module.css';
import {IconContext} from 'react-icons';
import {FaPlus} from 'react-icons/fa';
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5';
import {IoChevronDownCircleOutline} from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5';
import profilePic from '../../assets/logo_photo.jpg'


const InfoPane = () => {
    const profileName = `Chester Garett`

    return <ul className={classes['info-pane']}>
        <li className={classes['profile-pic']}><img src={profilePic} alt="Chester-Garett"/>{profileName}</li> 
        <IconContext.Provider value={{size: '20', color: 'black', fill: 'whitesmoke'}}>
            <li><FaPlus className={classes.icons}/></li> 
            <li><IoChatbubbleEllipsesOutline className={classes.icons}/></li> 
            <li><IoNotificationsOutline className={classes.icons}/></li> 
            <li><IoChevronDownCircleOutline className={classes.icons}/></li> 
        </IconContext.Provider>
    </ul>
};

export default InfoPane;