import {useContext} from 'react';
import GameContext from '../../../context/game-context';
import classes from './BodyTournament.module.css';
import BodyInput from './BodyInput';

const BodyTournament = () => {

    const{selectedTournaDetails} = useContext(GameContext)
    console.log(selectedTournaDetails.participants)

    return(
        <div className={classes.body}>
            <div className={classes.mainStream}>
                <span> {selectedTournaDetails.state} </span>
                <span> {selectedTournaDetails.matches[0]} </span>
                <span> {selectedTournaDetails.startsAt} </span>
                <span> {selectedTournaDetails.tournament_type} </span>
                <ul> {selectedTournaDetails.participants.map(participant =>{
                    return (
                        <li key={participant.id} id={participant.id}>
                            <span>{participant.attributes.name}</span>
                            <span>{participant.attributes.seed}</span>
                        </li>)
                    })} 
                </ul>
            </div>
            <div className={classes.richText}>
                <BodyInput/>
            </div>
        </div>
    )
}

export default BodyTournament;