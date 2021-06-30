import {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import MainContainer from '../UI/MainContainer'
import BudgetContext from '../../store/budget-context.js'
import useStyles from './mainStyles';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const BudgetMain = () => {
    const classes = useStyles();
    const {balance} = useContext(BudgetContext)
    return(
        <MainContainer>
            <Card>
                <CardHeader title="Budget App" subheader="Managing your finances since 2021." />
                <CardContent>
                    <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
                    <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                        {/*InfoCardComponent*/}
                    </Typography>
                    <Divider />
                    <BudgetForm/>
                    <CardContent className={classes.cardContent}>
                        <Grid item xs={12}>
                            <BudgetList />
                        </Grid>
                    </CardContent>
                </CardContent>
            </Card>
        </MainContainer>
    )
}

export default BudgetMain;
