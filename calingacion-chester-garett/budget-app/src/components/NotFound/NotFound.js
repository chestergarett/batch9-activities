import MainContainer from "../UI/MainContainer";
import {BiErrorCircle} from "react-icons/bi"
import Card from '@material-ui/core/Card';
import classes from './NotFound.module.css';

const NotFound = () => {
    return(
        <MainContainer>
            <Card className={classes.container}>
                <BiErrorCircle style={{color: 'red'}} size={30}/>
                <p>The page you are trying to view is not yet available.</p>
            </Card>
        </MainContainer>
    )
}

export default NotFound;
