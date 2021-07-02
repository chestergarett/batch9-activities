import ChartTotal from './ChartTotal';
import ChartDetail from './ChartDetail';
import MainContainer from '../UI/MainContainer'
import useStyles from './styles';


const ChartsCompiled = () => {
    const classes = useStyles();

    return (
        <MainContainer>   
            <div className={classes.main}>
                <ChartTotal title="Income"/> 
                <ChartDetail title="Income" />
                <ChartTotal title="Expense"/> 
                <ChartDetail title="Expense"/>
            </div> 
        </MainContainer>
        
    )
}

export default ChartsCompiled;

