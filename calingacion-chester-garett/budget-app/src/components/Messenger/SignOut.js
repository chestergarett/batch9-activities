import {Fab, Paper} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import 'firebase/auth';

const SignOut = ({auth}) => {
    return auth.currentUser && (
        <Paper elevation={0} style={{display: 'flex', justifyContent: 'flex-end', padding: '1rem'}}>
            <Fab size="small" color="secondary" aria-label="signOut" onClick={()=>auth.signOut()}>
                <ExitToAppIcon />
            </Fab>
        </Paper>
    )
}

export default SignOut;