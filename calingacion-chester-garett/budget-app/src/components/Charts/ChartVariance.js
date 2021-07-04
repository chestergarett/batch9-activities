import {Card, CardContent, Typography} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import useStyles from './styles';

import useVariance from '../../useVariance';

const ChartVariance = () => {
    const classes = useStyles();

    const { expenseTransactions } = useVariance();

    return( 
            <div>test</div>
    )
}

export default ChartVariance;