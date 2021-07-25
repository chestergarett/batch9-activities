import {RiDiscordLine} from 'react-icons/ri';
import {IoAddOutline} from 'react-icons/io5';
import {IoIosCompass} from 'react-icons/io';
import {SiTravisci} from 'react-icons/si';
import {FaAvianex} from 'react-icons/fa';

import {v4} from 'uuid'
import classes from './QuickShortcut.module.css';

import IconContainer from '../UI/IconContainer';

const DUMMY_SHORTCUTS = [
    {id: v4(), channel: 'Avion School Students', icon: <SiTravisci size={40}/>},
    {id: v4(), channel: 'Challonge Channel', icon: <FaAvianex size={40}/>}, 
]

const QuickShortcutSidebar = () => {

    return (
        <ul>
            <div className={classes.quickShortcut}>
                <div className={classes.homeIcon}>
                    <IconContainer><RiDiscordLine size={40}/></IconContainer>
                    <span></span>
                </div>
                <div className={classes.shortcutsMain}>
                    {DUMMY_SHORTCUTS.map(shortcut => {
                        return (
                            <IconContainer><li key={shortcut.id} id={shortcut.id}>{shortcut.icon}</li></IconContainer>
                        )
                    })}
                </div>
                <div className={classes.shortcutsOther}>
                    <IconContainer><IoAddOutline size={40}/></IconContainer>
                    <IconContainer><IoIosCompass size={40}/></IconContainer>
                </div>
            </div>
        </ul>
    )
}

export default QuickShortcutSidebar;