import classes from './BodyChat.module.css';
import {FaRegUserCircle } from 'react-icons/fa';
import {v4} from 'uuid';

const DUMMY_MEMBERS = [
    {id: v4(), name: 'Member_1', message: 'ambobo mo'},
    {id: v4(), name: 'Member_2', message: 'push mid'},
    {id: v4(), name: 'Member_3', message: 'tiktok ka nalang'},
]

const BodyChat = () => {

    return (
        <ul className={classes.chat}>
            {DUMMY_MEMBERS.map( member => {
                return (
                    <li key={member.id} id={member.id} className={classes.listItem}>
                        <span><FaRegUserCircle size={25}/></span>
                        <div className={classes.userDetails}>
                            <span className={classes.name}>{member.name}</span>
                            <span className={classes.message}>{member.message}</span>
                        </div>
                    </li>
                    )
                }
            )}
        </ul>
    )
}

export default BodyChat;