import {useContext} from 'react';
import ActualContext from '../../store/actual-context';
import {v4} from 'uuid';


import {List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import useStyles from './listStyles';

import displayDate from '../../utils/displayDate.js'

import { FcFaq, FcPlus, FcPuzzle, FcPositiveDynamic, FcRatings, FcSalesPerformance, FcShipped,FcVoicemail, FcTwoSmartphones,FcBiohazard} from "react-icons/fc";

const iconList = [<FcFaq/>, <FcPlus/> , <FcPuzzle/> , <FcPositiveDynamic/>, <FcRatings/>, <FcSalesPerformance/>, <FcShipped/>, <FcVoicemail/>, <FcTwoSmartphones/>, <FcFaq/>, <FcBiohazard/>]

const IncomeList = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ActualContext);
    

    return(
        <List dense={false} className={classes.list}>
            {transactions.map((transaction) => {
                if(transaction.type==='Income'){
                return    <Slide direction='down' in mountOnEnter unmountOnExit key={v4()}>
                        <ListItem key={transaction.id}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatarIncome}>
                                    {iconList[transaction.icon]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${transaction.category} - ${transaction.mainCategory}`} secondary={`₱${transaction.amount} - ${displayDate(transaction.date)}`}/>
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

export default IncomeList;