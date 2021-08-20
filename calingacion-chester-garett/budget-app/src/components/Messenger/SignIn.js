import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';
import {Paper,Card, CardMedia, Fab} from '@material-ui/core'
import AirplayIcon from '@material-ui/icons/Airplay';
import Community from '../../assets/community.png'

const SignIn = ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <Card style={{height: '40rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <CardMedia
            src={Community}
            component="img"
            title="Community"
            />
            <Fab variant="extended" onClick={signInWithGoogle} style={{marginBottom: '1rem', padding: '1rem'}}>
                <AirplayIcon style={{marginRight: '.5rem'}}/>
                Sign In with Google
            </Fab>
            <Paper elevation={0} style={{padding: '1rem', borderRadius: '12px', textAlign: 'center'}}>Let's talk business! Send me a message.<br/> OAuth2 connection powered by Firebase when signing in.</Paper>
        </Card>
    )
}

export default SignIn;