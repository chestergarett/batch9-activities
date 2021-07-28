import {useState, useContext} from 'react';
import GameContext from '../../context/game-context.js';

import {RiDiscordLine} from 'react-icons/ri';
import {IoAddOutline} from 'react-icons/io5';
import {IoIosCompass} from 'react-icons/io';
import {FaBasketballBall} from 'react-icons/fa';
import {FaTableTennis} from 'react-icons/fa';

import {v4} from 'uuid'
import classes from './QuickShortcut.module.css';

import IconContainer from '../UI/IconContainer';
import CenteredModal from '../UI/Modals/CenteredModal';

const DUMMY_SHORTCUTS = [
    {id: v4(), game: 'Basketball', icon: <FaBasketballBall size={40} style={{color: 'red'}}/>},
    {id: v4(), game: 'Table Tennis', icon: <FaTableTennis size={40} style={{color: 'red'}}/>}, 
]

const QuickShortcutSidebar = () => {

    const [openSport, setOpenSport] = useState(false)
    const {game,selectedHandler} = useContext(GameContext)

    const addSportModalHandler = () => {
        setOpenSport(true)
    }

    const closeSportHandler = () => {
        setOpenSport(false)
    }

    return (
        <>
            <div className={classes.quickShortcut}>
                <div className={classes.homeIcon}>
                    <IconContainer><RiDiscordLine size={40} className="icons"/></IconContainer>
                    <span></span>
                </div>
                <div className={classes.shortcutsMain}>
                    <ul>
                    {DUMMY_SHORTCUTS.map(shortcut => {
                        return (
                            <IconContainer key={shortcut.id}><li key={shortcut.id} id={shortcut.id} name={shortcut.game} onClick={selectedHandler}>{shortcut.icon}</li></IconContainer>
                        )
                    })}
                    </ul>
                </div>
                <div className={classes.shortcutsOther}>
                    <IconContainer><IoAddOutline size={40} onClick={addSportModalHandler}/></IconContainer>
                    <IconContainer><IoIosCompass size={40} /></IconContainer>
                </div>
            </div>
            {openSport && <CenteredModal onClose={closeSportHandler}/>}
        </>
    )
}

export default QuickShortcutSidebar;