import {Card, CardContent, Typography} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import useStyles from './styles';

import useTransactions from '../../useTransactions';

const ChartDetail = ({title}) => {
    const classes = useStyles();

    const { detailChartData} = useTransactions(title);

    return( 
            <Card className={title === "Income" ? classes.income : classes.expense}>
                <Typography variant="subtitle1" style={{margin: '3px', padding: 0, paddingTop: '3px'}}>{title} breakdown by Subcategory </Typography>
                <CardContent>
                    <div style={{position: 'relative', height:'15rem', width:'100%'}}>
                        <Bar data={detailChartData} 
                            options={{ indexAxis: 'y', maintainAspectRatio: false, plugins: {
                                    legend: {
                                            display: false,
                        }, }}} />
                    </div>
                </CardContent>   
            </Card>
    )
}

export default ChartDetail;