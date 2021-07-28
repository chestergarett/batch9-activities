import {useContext, useEffect, useState} from 'react';
import classes from './SidebarDetails.module.css';
import {HiOutlineHashtag} from 'react-icons/hi'

import GameContext from '../../context/game-context.js'


const SidebarDetails = () => {

    const {list, selectedTournaHandler} = useContext(GameContext)

    return(
        <ul>
        {list ? list.map( tourna => {
            return (
                <li key={tourna.id} id={tourna.id} className={classes.listItems} name={tourna.attributes.name} url={tourna.attributes.url} onClick={selectedTournaHandler}>
                    <HiOutlineHashtag/>
                    <span className={classes.channelName}>
                        {tourna.attributes.name}
                    </span>
                </li>
            )
        }) : 'test'}
    </ul>   
    )
}

export default SidebarDetails;