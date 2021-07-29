import {useContext} from 'react';
import GameContext from '../../../context/game-context';
import classes from './BodyTournament.module.css';
import BodyInput from './BodyInput';
import dateHelper from '../../../helpers/formatDate';

const BodyTournament = () => {

    const{selectedTourna, selectedTournaDetails} = useContext(GameContext)
    const formattedDate = dateHelper(selectedTournaDetails.startsAt)
    console.log(selectedTourna)

    return(
        <div className={classes.body}>
            {/* {selectedTourna?.length==0 ? */}
            <div className={classes.mainStream}>
                <div className={classes.headerItems}>
                    <span> {selectedTournaDetails.tournament_type} </span>
                    <span> {selectedTournaDetails.state} </span>
                    <span> {formattedDate} </span>
                </div>
                <table className={classes.table}>
                    <tr>
                        <th>Participants</th>
                        <th>Seed</th>
                    </tr> 
                    {selectedTournaDetails.participants.map(participant =>{
                    return (
                        <tr key={participant.id} id={participant.id}>
                            <td>{participant.attributes.name}</td>
                            <td className={classes.seed}>{participant.attributes.seed}</td>
                        </tr>)
                    })} 
                </table>
            </div>
            {/* </div> : <div className={classes.mainStream}>Draft reminders here</div> } */}
            <div className={classes.richText}>
                <BodyInput/>
            </div>
        </div>
    )
}

export default BodyTournament;