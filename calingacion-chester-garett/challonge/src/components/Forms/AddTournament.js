import {useState} from 'react';
import {postTournaments} from '../utils/utils.js';
import CenteredModal from '../UI/Modals/CenteredModal';
import {TextField,Button} from '@material-ui/core';
import generateUID from '../../helpers/idGenerator';
import classes from './AddTournament.module.css';
import Success from '../Success/Success';
import Errors from '../Errors/Errors';


const AddTournament = (props) => {

    const [formData, setFormData] = useState({})
    const [errorDiv,setErrorDiv] = useState(null);
    const [successDiv, setSuccessDiv] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        postTournaments(formData.name, `${generateUID()}_bball`, formData.starts_at, formData.description)
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
        <>
            <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
        
                    <input  
                        id="tournamentName" 
                        placeholder="Tournament Name" 
                        type="text"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, name: (e.target.value)})}
                    />

                    <input
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, starts_at: (e.target.value)})}
                    />

                    <input
                        id="description"
                        label="Description"
                        placeholder="Describe Tournament here"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, description: (e.target.value)})}
                    /> 

                    <Button 
                        variant="contained" 
                        style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}
                        type="submit"
                    >
                            Create Tournament
                    </Button>
                    {successDiv && <Success message="Successfully updated tournament details."/>}
                    {errorDiv && <Errors error={errorDiv}/>}
                </form> 
            </CenteredModal>
        </>
    )
}

export default AddTournament;
