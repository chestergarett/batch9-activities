import {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './homeStyles.js';
import {RiAddCircleFill} from 'react-icons/ri';
import high_school from '../../assets/profile/high_school.jpeg';
import timid_pic from '../../assets/profile/timid_pic.jpeg';
import hiking_pic from '../../assets/profile/hiking_pic.jpeg';
import work_pic from '../../assets/profile/work_pic.jpeg';

import StoryModal from '../Modals/StoryModal.js';


const HomeStories = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const stories = [
        {caption: "", image: high_school},
        {caption: "", image: timid_pic},
        {caption: "", image: hiking_pic},
        {caption: "", image: work_pic},
    ]

    const openModalHandler = () => {
        setOpen(true)
    }

    const closeModalHandler = () => {
        setOpen(false)
    }

    return(
        <div className={classes.storiesContainer}>
            <Card className={classes.storyCard} onClick={openModalHandler}>
                <div className={classes.storyCreate}>
                    <RiAddCircleFill size={30} style={{color: '#097969'}}/>
                    <CardContent style={{padding: '.5rem'}}>Create <br/>story</CardContent>
                </div>
            </Card>
            {stories.map( story => {
                return (
                    <Card className={classes.storyCard} onClick={openModalHandler}>
                        <CardMedia image={story.image} title={story.caption} className={classes.storyImage}/>
                    </Card>
                )
            })}
        {open && <StoryModal onClose={closeModalHandler}/>}
        </div>
    )
}

export default HomeStories;