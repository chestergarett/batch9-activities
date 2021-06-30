import {Button} from '@material-ui/core'
import 'firebase/auth';

const SignOut = ({auth}) => {
    return auth.currentUser && (
        <Button onClick={()=>auth.signOut()}>Sign Out</Button>
    )
}

export default SignOut;