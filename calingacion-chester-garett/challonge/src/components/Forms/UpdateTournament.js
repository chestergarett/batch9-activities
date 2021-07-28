import {useState} from 'react';
import {TextField} from '@material-ui/core';
import CenteredModal from '../UI/Modals/CenteredModal';
import dateHelper from '../../helpers/formatDate';

const UpdateTournament = () => {

    const [formData, setFormData] = useState({})
    const submitHandler = () => {
        console.log(formData)
    }

    return(
        <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>

                    <TextField
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        defaultValue="2021-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, starts_at: dateHelper(e.target.value)})}
                    />

                    <TextField
                        id="description"
                        label="Description"
                        placeholder="Describe Tournament here"
                        multiline
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, description: e.target.value})}
                    /> 

                    <Button type='submit'>Create Tournament</Button>
                </form> 
            </CenteredModal>
    )
}

export default UpdateTournament;
