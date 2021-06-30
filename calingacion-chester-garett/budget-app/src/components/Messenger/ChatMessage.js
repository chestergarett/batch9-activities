import {Card,Avatar, CardContent} from '@material-ui/core';
import useStyles from './chatStyles.js'

const ChatMessage = (props) => {
    const classes = useStyles();

    const {text, uid, photoURL} = props.message;
    const {auth} = props.auth;
    console.log(props.message)
    // const messageClass = uid === auth.currentUser.uid ? 'sent':'received';
    return (
    <Card className={classes.message}>
        <Avatar src={photoURL}/>
        <CardContent>{text}</CardContent>
    </Card>
    )
}

export default ChatMessage;