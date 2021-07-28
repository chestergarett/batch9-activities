import 'firebase/auth';
import {useContext} from 'react';
import GameContext from '../../context/game-context';
import classes from './BodyHeader.module.css';

import {HiOutlineHashtag} from 'react-icons/hi';
import {FaBell} from 'react-icons/fa';
import {AiFillPushpin} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import {RiInboxFill} from 'react-icons/ri';
import {IoExitOutline} from 'react-icons/io5';

import BodySearch from './header/BodySearch';


const BodyHeader = ({auth}) => {
    
    const {selectedTourna} = useContext(GameContext);

    return (
        <div className={classes.bodyHeader}>
            <div className={classes.headerLabel}>
                <HiOutlineHashtag/>
                <span>{selectedTourna}</span>
            </div>
            <div className={classes.headerShortcut}>
                <FaBell size={25} className='icons'/>
                <AiFillPushpin size={25} className='icons'/>
                <FaUserFriends size={25} className='icons'/>
                <BodySearch />
                <RiInboxFill size={25} className='icons'/>
                <IoExitOutline 
                    size={25} 
                    className='icons'
                    onClick={()=>auth.signOut()}
                />
            </div>
        </div>
    )
}

export default BodyHeader;