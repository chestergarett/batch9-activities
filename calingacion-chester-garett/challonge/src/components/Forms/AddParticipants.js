import {useContext} from 'react';
import CenteredModal from '../UI/Modals/CenteredModal';
import GameContext from '../../context/game-context';
import {Button} from '@material-ui/core';
import classes from './AddParticipants.module.css';

const AddParticipants = (props) => {

    const {selectedTourna} = useContext(GameContext)
    const DUMMY_USERS = ['Chester', 'Als', 'Bryan']

    return (
    <CenteredModal onClose={props.onClose}>
        <div className={classes.form}>
            <div className={classes.header}>{selectedTourna}</div>
            <select multiple className={classes.items}>
                {DUMMY_USERS.map( user => {
                    return (
                        <option>{user}</option>
                    )
                })}
            </select>
            <input type="text" name="name" placeholder="name" className={classes.items}/>
            <input type="text" name="username" placeholder="username" className={classes.items}/>
            <Button variant="contained" style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}> Add Participants </Button>
        </div>
    </CenteredModal>   
    )
}

export default AddParticipants;
