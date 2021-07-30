import {useState, useContext} from 'react';
import {deleteTournament} from '../utils/utils.js'; 
import GameContext from '../../context/game-context';
import {Button} from '@material-ui/core';
import classes from './DeleteTournament.module.css';
import CenteredModal from '../UI/Modals/CenteredModal';
import Errors from '../Errors/Errors';
import Success from '../Success/Success';

const DeleteTournament = (props) => {

    const {selectedURL, selectedTourna} = useContext(GameContext)

    const [errorDiv,setErrorDiv] = useState(null);
    const [successDiv, setSuccessDiv] = useState(false);

    const submitHandler = () => {
        
        deleteTournament(selectedURL)
        .then(res=>{
            setSuccessDiv(true)
            setErrorDiv(null)
            console.log(selectedURL)
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
            console.log(selectedURL)
        })
    }

    return (
        <CenteredModal onClose={props.onClose}>
            <form className={classes.form}>
                <div className={classes.header}> {selectedTourna}</div>
                <span className={classes.items}> Are you sure you want to delete tournament? </span>
                {successDiv && <Success message="Successfully change state."/>}
                {errorDiv && <Errors error={errorDiv}/>}
                <Button 
                    variant="contained" 
                    style={{color: 'whitesmoke', backgroundColor:'#7289DA'}} 
                    onClick={submitHandler}
                >
                    YES
                </Button>
                </form> 
        </CenteredModal>
    )
}

export default DeleteTournament;