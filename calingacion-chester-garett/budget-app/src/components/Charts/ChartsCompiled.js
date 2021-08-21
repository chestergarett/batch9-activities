import {Link} from 'react-router-dom';
import ChartTotal from './ChartTotal';
import ChartDetail from './ChartDetail';
import ChartWeekly from './ChartWeekly';
import MainContainer from '../UI/MainContainer'
import useStyles from './styles';
import Card from '@material-ui/core/Card'

const ChartsCompiled = () => {
    const classes = useStyles();

    return (
        <MainContainer>   
            <div className={classes.main}>
                <Link to='/Income'>
                    <Card style={{padding: '.5rem'}}>Set 
                        <span style={{color: 'red'}}>&nbsp;BUDGET</span> to view <span style={{color: 'red'}}>&nbsp;LIVE ANALYTICS</span>
                    </Card>
                </Link>
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