import {useState, useContext} from 'react';
import {changeStateTournament} from '../utils/utils.js'; 
import GameContext from '../../context/game-context';
import {Button} from '@material-ui/core';
import Select from 'react-select';
import classes from './ChangeStateTournament.module.css';
import CenteredModal from '../UI/Modals/CenteredModal';

const ChangeStateTournament = (props) => {

    const {selectedTourna} = useContext(GameContext)
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

    const customStyles = {
        control: (base,state) => {return {...base, background: 'whitesmoke'}},
        menuPortal: base => { return {...base, zIndex: 9999, backgroundColor: "black"} },
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : "whitesmoke",
            color: "#333333",
          };
        }
      };

    return (
        <CenteredModal onClose={props.onClose}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.header}> {selectedTourna}</div>
                <Select
                    styles={customStyles}
                    className={classes.items}
                    name="Tournament Type"
                    options={options}
                    onChange={dropdownHandler}
                    value={selectedOption}
                />

                <Button variant="contained" style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}>CHANGE STATE</Button>
                </form> 
        </CenteredModal>
    )
}

export default ChangeStateTournament;