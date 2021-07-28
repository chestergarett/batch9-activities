import {useState} from 'react';
import {postTournaments} from '../utils/utils.js';
import axios from '../../api/challongeConfig.js';

import CenteredModal from '../UI/Modals/CenteredModal';
import {TextField,Button} from '@material-ui/core';
import dateHelper from '../../helpers/formatDate';
import Select from 'react-select';
import {v4} from 'uuid';
import classes from './AddTournament.module.css';

const initialState = {
    type: 'Tournaments',
    name: '',
    url: '',
    tournament_type: '',
    starts_at: '',
    description: '',
}

const AddTournament = (props) => {

    const UNIQUE_ID = v4();
    const DUMMY_IDENTIFIER = 'bball';
    const options = [
        {value:'single elimination', label: 'single elimination'},
        {value:'double elimination', label: 'double elimination'},
        {value:'round robin', label: 'round robin'} 
    ]

    const [selectedOption, setSelectedOption] = useState('single elimination')

    const dropdownHandler = (e) =>{
        setSelectedOption(e)
        setFormData({...formData, tournament_type: e.value})
    }

    const [formData, setFormData] = useState(initialState)

    const submitHandler = (e) => {
        e.preventDefault()
        postTournaments(formData)
        .then(res => console.log(res))
        .then(console.log(postTournaments(formData)))
        .catch(error=>console.error)

        // axios.post('./tournaments.json', {
        //     data: {
        //         type: "Tournaments",
        //         attributes: {
        //             name: "tournamentforyoutest",
        //             url: "test1_basketballLink",
        //             tournament_type: "single elimination",
        //             starts_at: "05/05/2021 05:05:05",
        //             description: "test Description"
        //         }
        //     }
        // }).then(res=>console.log(res)).then(console.log(formData)).catch(error=>console.error)
    }

    return (
        <>
            <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField  disabled 
                    value="Tournaments"
                    required
                    id="type" 
                    label="type" 
                    name="type"  
                    className={classes.items}
                    />
                    
                    <TextField 
                        required 
                        id="tournamentName" 
                        placeholder="Tournament Name" 
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, name: e.target.value})}
                        />
                    
                    <TextField 
                        required
                        id="url" 
                        label="URL" 
                        defaultValue={`${UNIQUE_ID}_${DUMMY_IDENTIFIER}`}
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, url: e.target.value})}
                    />

                    <Select
                            className={classes.items}
                            name="Tournament Type"
                            options={options}
                            onChange={dropdownHandler}
                            value={selectedOption}
                    />

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
        </>
    )
}

export default AddTournament;
