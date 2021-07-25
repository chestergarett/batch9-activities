import classes from './BodyHeader.module.css';

import {HiOutlineHashtag} from 'react-icons/hi';
import {FaBell} from 'react-icons/fa';
import {AiFillPushpin} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import {RiInboxFill} from 'react-icons/ri';
import {IoHelpCircleOutline} from 'react-icons/io5';

import BodySearch from './header/BodySearch';

const DUMMY_CHANNEL = {
    name: 'DUMMY_CHANNEL',
}

const BodyHeader = () => {

    return (
        <div className={classes.bodyHeader}>
            <div className={classes.headerLabel}>
                <HiOutlineHashtag/>
                <span>{DUMMY_CHANNEL.name}</span>
            </div>
            <div className={classes.headerShortcut}>
                <FaBell size={25}/>
                <AiFillPushpin size={25}/>
                <FaUserFriends size={25}/>
                <BodySearch />
                <RiInboxFill size={25}/>
                <IoHelpCircleOutline size={25}/>
            </div>
        </div>
    )
}

export default BodyHeader;