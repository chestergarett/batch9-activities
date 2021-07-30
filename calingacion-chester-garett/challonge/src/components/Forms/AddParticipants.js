import {useState,useContext} from 'react';
import CenteredModal from '../UI/Modals/CenteredModal';
import GameContext from '../../context/game-context';
import {Button} from '@material-ui/core';
import classes from './AddParticipants.module.css';
import { addParticipants } from '../utils/utils';
import Success from '../Success/Success';
import Errors from '../Errors/Errors';

const AddParticipants = (props) => {

    const [formData, setFormData] = useState({})
    const {selectedURL, selectedTourna} = useContext(GameContext)
    const [errorDiv,setErrorDiv] = useState(null);
    const [successDiv, setSuccessDiv] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        addParticipants(selectedURL,formData.name, formData.seed, formData.misc, formData.email,formData.username)
        .then(res=>{
            setSuccessDiv(true)
            setErrorDiv(null)
            })
        .catch(err=>{
            if(err.response.status===404){
                setErrorDiv("404")
            }
            if(err.response.status===401){
                setErrorDiv("401")
            }
            if(err.response.status===406){
                setErrorDiv("406")
            }
            if(err.response.status===415){
                setErrorDiv("415")
            }
            if(err.response.status===422){
                setErrorDiv("422")
            }
            setSuccessDiv(false)
        })
    }
    return (
    <CenteredModal onClose={props.onClose}>
        <div className={classes.form}>
            <div className={classes.header}>{selectedTourna}</div>
        
            <input type="text" name="name" placeholder="name" className={classes.items} 
                onChange = { (e) => setFormData({...formData, name: (e.target.value)})}
            />
            <input type="number" name="seed" placeholder="seed" className={classes.items}
                onChange = { (e) => setFormData({...formData, seed: (e.target.value)})}
            />
            <input type="text" name="misc" placeholder="misc" className={classes.items}
                onChange = { (e) => setFormData({...formData, misc: (e.target.value)})}
            />
            <input type="email" name="email" placeholder="email" className={classes.items}
                onChange = { (e) => setFormData({...formData, email: (e.target.value)})}
            />
            <input type="text" name="username" placeholder="username" className={classes.items}
                onChange = { (e) => setFormData({...formData, username: (e.target.value)})}
            />
        
            <Button variant="contained" 
                style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}
                onClick={submitHandler}
            > 
                Add Participants 
            </Button>
            {successDiv && <Success message="Successfully added participants."/>}
            {errorDiv && <Errors error={errorDiv}/>}
        </div>
    </CenteredModal>   
    )
}

export default AddParticipants;
