import Charts from './Charts';
import MainContainer from '../UI/MainContainer'
import useStyles from './styles';


const ChartsCompiled = () => {
    const classes = useStyles();

    return (
        <MainContainer>   
            <div className={classes.main}>
            <Charts title="Income"/> 
            <Charts title="Expense"/> 
            </div> 
        </MainContainer>
        
    )
}

export default ChartsCompiled;

