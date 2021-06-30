import gcash from '../../assets/gcash.jpg';
import {Card} from '@material-ui/core';
import MainContainer from '../UI/MainContainer';
import useStyles from './forestStyles.js';

const Forest = () => {
    const classes = useStyles();
    return (
        <MainContainer>
            <Card className={classes.card}>
                <img src={gcash} alt='Forest'/>
            </Card>
        </MainContainer>
    )
}

export default Forest;