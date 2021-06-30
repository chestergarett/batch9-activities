import {Fragment} from 'react'
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

const SignIn = ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <Fragment>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
        </Fragment>
    )
}

export default SignIn;