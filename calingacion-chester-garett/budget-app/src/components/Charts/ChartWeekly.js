import {Card, CardContent, Typography} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import useStyles from './styles';

import useTransactions from '../../useTransactions';

const ChartWeekly = ({title}) => {
    const classes = useStyles();

    const { weeklyChartData } = useTransactions(title);

    return( 
            <Card className={title === "Income" ? classes.income : classes.expense}>
                <Typography variant="subtitle1" style={{margin: '3px', padding: 0, paddingTop: '3px'}}> Expenses per Week </Typography>
                <CardContent>
                    <div style={{position: 'relative', height:'15rem', width:'100%'}}>
                        <Bar data={weeklyChartData} 
                            options={{ maintainAspectRatio: false, plugins: {
                                    legend: {
                                            display: false,
                        }, }}} />
                    </div>
                </CardContent>   
            </Card>
    )
}

export default ChartWeekly;