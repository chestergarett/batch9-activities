import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Card, Paper, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import MainContainer from '../UI/MainContainer'
import ActualContext from '../../store/actual-context.js'
import useStyles from './mainStyles';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseMain = () => {
    const classes = useStyles();
    const {expenseBalance} = useContext(ActualContext)
    return(
        <MainContainer>
            <Paper style={{display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', border: 'none'}}>
            <Card style={{backgroundColor: 'transparent', display:'flex'}} elevation={0} align="left">
                    <Link to='/Income' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                        <Typography align='left' variant='subtitle1' style={{height:'65%', color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex',alignItems:'flex-end'}}>Income</Typography>
                    </Link>
                    <Typography align='left' variant='h6' style={{color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#f44336', display:'flex'}}>Expense</Typography>
                    <Link to='/Budget' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                    <Typography align='left' variant='subtitle1' style={{height:'65%', color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex', alignItems: 'flex-end'}}>Budget</Typography>
                    </Link>
            </Card>
            
            <Card>
                <CardContent>
                    <Typography align='center' variant='h5' style={{padding: '1rem'}}>₱ {expenseBalance}</Typography>
                    <Typography align='center' variant='subtitle2'>Actual Expenses</Typography>
                    <Divider style={{paddingBottom: '.5rem'}}/>
                    <ExpenseForm/>
                    <CardContent className={classes.cardContent}>
                        <Grid item xs={12}>
                            <ExpenseList />
                        </Grid>
                    </CardContent>
                </CardContent>
            </Card>
        </Paper>
        </MainContainer>
    )
}

export default ExpenseMain;
