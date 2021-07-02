import {useContext} from 'react';
import ActualContext from '../../store/actual-context';
import displayDate from '../../utils/displayDate.js'

import {List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import useStyles from './listStyles';

import { FcBiotech,FcBearish,FcCandleSticks,FcAutomotive,FcCancel,FcDislike,FcDoNotInhale,FcEngineering,FcExpired,FcFactoryBreakdown,FcInTransit } from "react-icons/fc";

const iconList = [<FcBiotech/>, <FcBearish/> , <FcCandleSticks/> , <FcAutomotive/>, <FcCancel/>, <FcDislike/>, <FcDoNotInhale/>, <FcEngineering/>, <FcExpired/>, <FcFactoryBreakdown/>, <FcInTransit/>]

const ExpenseList = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ActualContext);
    
    return(
        <List dense={false} className={classes.list}>
            {transactions.map((transaction) => {
                if(transaction.type==='Expense'){
                    return <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatarExpense}>
                                {iconList[transaction.icon]}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₱${transaction.amount} - ${displayDate(transaction.date)}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick={()=> deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
                }
               
            })}
        </List>    
    )
}

export default ExpenseList;