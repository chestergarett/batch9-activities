import HomeStatus from './HomeStatus'
import HomeCards from './HomeCards';
import MainContainer from '../UI/MainContainer';
import useStyles from './homeStyles.js'

const HomeCompiled = () => {
    const classes = useStyles()    
    return (
        <MainContainer>
            <div className={classes.mainHome}>
                <HomeStatus />
                <HomeCards />     
            </div>
        </MainContainer>
    )
};

export default HomeCompiled;