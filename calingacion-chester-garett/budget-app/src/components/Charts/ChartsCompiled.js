import ChartTotal from './ChartTotal';
import ChartDetail from './ChartDetail';
import ChartWeekly from './ChartWeekly';
import MainContainer from '../UI/MainContainer'
import useStyles from './styles';


const ChartsCompiled = () => {
    const classes = useStyles();

    return (
        <MainContainer>   
            <div className={classes.main}>
                <p>Set budget to view LIVE ANALYTICS</p>
                <div><span>&nbsp;</span></div>
                <ChartTotal title="Income"/> 
                <ChartDetail title="Income" />
                <ChartTotal title="Expense"/> 
                <ChartDetail title="Expense"/>
                <ChartWeekly title="Expense"/>
            </div> 
        </MainContainer>
        
    )
}

export default ChartsCompiled;