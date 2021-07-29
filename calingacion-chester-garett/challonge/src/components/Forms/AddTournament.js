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

    const customStyles = {
        control: (base,state) => {return {...base, background: '#2c3539e8', border: 'none'}},
        menuPortal: base => { return {...base, zIndex: 9999, backgroundColor: "#2c3539e8"} },
        menuList: base => {return {...base, padding: 0}},
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : "#2c3539e8",
            color: "whitesmoke",
          };
        }
      };

    return (
        <>
            <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <input  disabled 
                    value="Tournaments"
                    id="type" 
                    label="type" 
                    name="type"
                    type="text"  
                    className={classes.items}
                    />
                    
                    <input 
                        required 
                        id="tournamentName" 
                        placeholder="Tournament Name" 
                        type="text"
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, name: e.target.value})}
                    />
                    
                    <input
                        required
                        id="url" 
                        label="URL" 
                        defaultValue={`${UNIQUE_ID}_${DUMMY_IDENTIFIER}`}
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, url: e.target.value})}
                    />

                    <Select
                            menuPortalTarget={document.body}
                            className={classes.items}
                            styles={customStyles}
                            name="Tournament Type"
                            options={options}
                            onChange={dropdownHandler}
                            value={selectedOption}
                    />

                    <input
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        defaultValue="2021-05-24T10:30"
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

                    <Button variant="contained" style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}>Create Tournament</Button>
                </form> 
            </CenteredModal>
        </>
    )
}

export default AddTournament;
