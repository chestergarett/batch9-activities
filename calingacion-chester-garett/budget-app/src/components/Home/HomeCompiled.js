import HomeStatus from './HomeStatus'
import HomeCards from './HomeCards';
import HomeStories from './HomeStories';
import MainContainer from '../UI/MainContainer';
import useStyles from './homeStyles.js'

const HomeCompiled = () => {
    const classes = useStyles();
        
    return (
        <MainContainer>
            <div className={classes.mainHome}>
                <HomeStories/>
                <HomeStatus />
                <HomeCards />     
            </div>
        </MainContainer>
    )
};

export default HomeCompiled;