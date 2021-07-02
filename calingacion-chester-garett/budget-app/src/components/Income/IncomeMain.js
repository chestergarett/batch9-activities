import {useContext} from 'react';
import {Card, Paper, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MainContainer from '../UI/MainContainer'
import ActualContext from '../../store/actual-context.js'
import useStyles from './listStyles';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

const IncomeMain = () => {
    const classes = useStyles();
    const {incomeBalance, totalBalance} = useContext(ActualContext)
    
    return(
        <MainContainer>
        <Paper style={{display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', border: 'none'}}>
            <Card style={{backgroundColor: 'transparent', display:'flex'}} elevation={0} align="left">
                    <Typography align='left' variant='h6' style={{color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#7F9A65', display:'flex'}}>Income</Typography>
                    <Link to='/Expense' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                        <Typography align='left' variant='subtitle1' style={{height: '65%', color: 'white', borderTopRightRadius: '12px', borderBottomLeftRadius: '5px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex', alignItems:'flex-end'}}>Expense</Typography>
                    </Link>
                    <Link to='/Budget' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                        <Typography align='left' variant='subtitle1' style={{height:'65%', color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex', alignItems: 'flex-end'}}>Budget</Typography>
                    </Link>
            </Card>
            
            <Card>
                <CardContent>
                    <Typography align='center' variant='h5' style={{padding: '1rem'}}>₱ {incomeBalance}</Typography>
                    <Typography align='center' variant='subtitle2'>Actual Income</Typography>
                    <Divider style={{paddingBottom: '.5rem'}}/>
                    <IncomeForm/>
                    <CardContent className={classes.cardContent}>
                        <Grid item xs={12}>
                            <IncomeList />
                        </Grid>
                    </CardContent>
                </CardContent>
            </Card>
        </Paper>
        </MainContainer>
    )
}

export default IncomeMain;
