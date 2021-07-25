import classes from './Login.module.css';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import {Fab} from '@material-ui/core';

const Login = () => {
    const signInWithGoogle = () => {

    }

    const signInWithFacebook = () => {

    }

    return(
        <div className={classes.login}>
            <div className={classes.container}>
                    <div className={classes.heading}>
                        <h2>Welcome back!</h2>
                        <span>We're so excited to see you again!</span>
                    </div>
                    <div className={classes.input}>
                        <Fab variant="extended" 
                            onClick={signInWithGoogle} 
                            style={{marginBottom: '1rem', padding: '1rem', background: '#2c3539e8', color: 'whitesmoke'}}
                        >
                            <FcGoogle style={{marginRight: '.5rem'}} size={20}/>
                                Sign In with Google
                        </Fab>
                        <Fab variant="extended" 
                            onClick={signInWithFacebook} 
                            style={{marginBottom: '1rem', padding: '1rem', background: '#2c3539e8', color: 'whitesmoke'}}
                        >
                            <FaFacebook style={{marginRight: '.5rem', color: '#4267B2'}} size={20}/>
                                Sign In with Facebook
                        </Fab>
                    </div>
            </div>
        </div>
    )

}

export default Login;
