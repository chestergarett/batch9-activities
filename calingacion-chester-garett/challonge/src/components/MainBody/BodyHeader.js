import 'firebase/auth';
import {useState,useContext} from 'react';
import GameContext from '../../context/game-context';
import classes from './BodyHeader.module.css';

import {HiOutlineHashtag} from 'react-icons/hi';
import {AiOutlineEdit} from 'react-icons/ai';
import {FaFlagCheckered} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {RiInboxFill} from 'react-icons/ri';
import {IoExitOutline} from 'react-icons/io5';

import BodySearch from './header/BodySearch';
import AddParticipants from '../Forms/AddParticipants';
import ChangeStateTournament from '../Forms/ChangeStateTournament';
import UpdateTournament from '../Forms/UpdateTournament';

const BodyHeader = ({auth}) => {
    
    const {selectedTourna} = useContext(GameContext);
    const [openParticipants, setOpenParticipants] = useState(false)
    const [openChangeState, setOpenChangeState] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)

    const openParticipantsHandler = () => {
        setOpenParticipants(true)
    }

    const closeParticipantsHandler = () => {
        setOpenParticipants(false)
    }

    const openChangeStateHandler = () => {
        setOpenChangeState(true)
    }

    const closeChangeStateHandler = () => {
        setOpenChangeState(false)
    }

    const openUpdateHandler = () => {
        setOpenUpdate(true)
    }

    const closeUpdateHandler = () => {
        setOpenUpdate(false)
    }

    return (
        <div className={classes.bodyHeader}>
            <div className={classes.headerLabel}>
                <HiOutlineHashtag/>
                <span>{selectedTourna}</span>
            </div>
            <div className={classes.headerShortcut}>
                <AiOutlineEdit size={25} className='icons' onClick={openUpdateHandler}/>
                <FaFlagCheckered size={25} className='icons' onClick={openChangeStateHandler}/>
                <FaUserFriends size={25} className='icons' onClick={openParticipantsHandler}/>
                <BodySearch />
                <RiInboxFill size={25} className='icons'/>
                <IoExitOutline 
                    size={25} 
                    className='icons'
                    onClick={()=>auth.signOut()}
                />
            </div>
            {openParticipants && <AddParticipants onClose={closeParticipantsHandler}/>}
            {openChangeState && <ChangeStateTournament onClose={closeChangeStateHandler}/>}
            {openUpdate && <UpdateTournament onClose={closeUpdateHandler}/>}
        </div>
    )
}

export default BodyHeader;