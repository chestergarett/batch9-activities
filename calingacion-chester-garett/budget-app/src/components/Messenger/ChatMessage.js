import {Card,Avatar, CardContent} from '@material-ui/core';
import useStyles from './chatStyles.js'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const ChatMessage = (props) => {
    const classes = useStyles();

    const auth = firebase.auth().currentUser.uid
    const {text, uid, photoURL} = props.message;
    const messageClass = uid === auth ? 'sent':'received';

    if (messageClass === 'sent'){
        return (
            <Card className={`${classes.message} ${classes.sent}`}>
                <Avatar src={photoURL}/>
                <CardContent className={`${classes.messageText} ${classes.messageSent}`}>{text}</CardContent>
            </Card>
            )
    }
    
    return(
             <Card className={`${classes.message} ${classes.received}`}>
                <Avatar src={photoURL}/>
                <CardContent className={classes.messageText}>{text}</CardContent>
            </Card>
    ) 
    
}

export default ChatMessage;