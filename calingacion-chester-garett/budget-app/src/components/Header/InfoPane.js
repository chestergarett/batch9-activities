import classes from './InfoPane.module.css';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {FaGithub} from 'react-icons/fa';
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5';
import {IoChevronDownCircleOutline} from 'react-icons/io5';
import {AiFillLinkedin} from 'react-icons/ai';
import profilePic from '../../assets/logo_photo.jpg'
import Tooltip from '@material-ui/core/Tooltip';


const InfoPane = () => {
    const profileName = `Chester Garett`

    return <ul className={classes['info-pane']} data-testid="infobar">
        <Tooltip title="Profile">
            <Link to='/Profile'>
                <li className={classes['profile-pic']}>
                    <img src={profilePic} alt="Chester-Garett"/>{profileName}
                </li> 
            </Link>
        </Tooltip>
        <IconContext.Provider value={{size: '20', color: 'black', fill: 'whitesmoke'}}>
            <Tooltip title="Github">
                <li>
                    <a target="_blank" href="https://github.com/chestergarett"> 
                        <FaGithub className={classes.icons}/>
                    </a>
                </li> 
            </Tooltip>
            <Tooltip title="Messenger">
                <li>
                    <Link to='Messenger'>
                        <IoChatbubbleEllipsesOutline className={classes.icons}/>
                    </Link>
                </li> 
            </Tooltip>
            <Tooltip title="LinkedIn">
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/chester-garett-calingacion-cpa-033284170">
                        <AiFillLinkedin className={classes.icons}/>
                    </a>
                </li> 
            </Tooltip>
            <li>
                <IoChevronDownCircleOutline className={classes.icons}/>
            </li> 
        </IconContext.Provider>
    </ul>
};

export default InfoPane;