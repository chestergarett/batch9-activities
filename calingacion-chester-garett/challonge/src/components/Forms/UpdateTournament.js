import {useState, useContext} from 'react';
import GameContext from '../../context/game-context';
import {TextField, Button} from '@material-ui/core';
import CenteredModal from '../UI/Modals/CenteredModal';
import classes from './UpdateTournament.module.css';
import dateHelper from '../../helpers/formatDate';

const UpdateTournament = (props) => {
    const {selectedTourna} = useContext(GameContext);
    const [formData, setFormData] = useState({})
    
    const submitHandler = () => {
        console.log(formData)
    }

    return(
        <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.header}>{selectedTourna}</div>
                    <input
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, starts_at: dateHelper(e.target.value)})}
                    />

                    <input
                        id="description"
                        label="Description"
                        placeholder="Describe Tournament here"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, description: e.target.value})}
                    /> 

                    <Button variant="contained" style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}>Update Tournament</Button>
                </form> 
            </CenteredModal>
    )
}

export default UpdateTournament;
