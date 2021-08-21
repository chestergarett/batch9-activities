import { Card,Avatar, TextField, Button, Box } from '@material-ui/core';
import profilePic from '../../assets/logo_photo.jpg'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon  from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import useStyles from './homeStyles.js';

const HomeStatus = () => {
    const classes = useStyles();

    return(
        <Card className={classes.homeStatus}>
            <Box className={classes.boxGroup} m={1}>
                <Avatar alt="Chester Garett" src={profilePic} />
                <TextField className={classes.textArea} id="outlined-basic" label="What's on your mind, Mate?" variant="outlined" size="small"/>
            </Box>
            <Box className={classes.boxGroup} m={1}>
                <Button startIcon={<VideoCallIcon color="secondary"/>}>Live Video</Button>
                <Button startIcon={<PhotoLibraryIcon style={{ color: "green" }}/>}>Photo/Video</Button>
                <Button startIcon={<MoodIcon style={{ color: "#aa6c39" }}/>}>Feeling/Activity</Button>
            </Box>
        </Card>
    )
}

export default HomeStatus;