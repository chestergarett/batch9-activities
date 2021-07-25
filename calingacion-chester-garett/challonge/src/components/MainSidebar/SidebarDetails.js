import {v4} from 'uuid';
import classes from './SidebarDetails.module.css';

import {HiOutlineHashtag} from 'react-icons/hi'

const DUMMY_CHANNELS = [
    {name: 'Channel 1', id: v4()},
    {name: 'Channel 2', id: v4()},
    {name: 'Channel 3', id: v4()},

]
const SidebarDetails = () => {
    return(
        <ul>
        {DUMMY_CHANNELS.map( channel => {
            return (
                <li key={channel.id} id={channel.id} className={classes.listItems}>
                    <HiOutlineHashtag/>
                    <span className={classes.channelName}>
                        {channel.name}
                    </span>
                </li>
            )
        })}
    </ul>   
    )
}

export default SidebarDetails;