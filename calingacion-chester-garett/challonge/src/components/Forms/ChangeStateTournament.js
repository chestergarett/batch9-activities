import {useState} from 'react';
import {changeStateTournament} from '../utils/utils.js'; 
import {Button} from '@material-ui/core';
import Select from 'react-select';
import CenteredModal from '../UI/Modals/CenteredModal';

const ChangeStateTournament = () => {

    const [formData, setFormData] = useState({})
    const submitHandler = () => {
        console.log(formData)
    }

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

    return (
        <CenteredModal>
            <form className={classes.form} onSubmit={submitHandler}>
                <Select
                    className={classes.items}
                    name="Tournament Type"
                    options={options}
                    onChange={dropdownHandler}
                    value={selectedOption}
                />

                <Button type='submit'>Create Tournament</Button>
                </form> 
        </CenteredModal>
    )
}

export default ChangeStateTournament;