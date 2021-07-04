import {useContext} from 'react';
import BudgetContext from '../../store/budget-context';

import {List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {FcRating} from 'react-icons/fc'
import useStyles from './listStyles';


const BudgetList = () => {
    const classes = useStyles();
    const {deleteBudget, budget, weekEndingBalance} = useContext(BudgetContext);
    
    return(
        <List dense={false} className={classes.list}>
            {budget.map((budgetItem) => {
                // if(budgetItem.type==='Budget'){
                    return <Slide direction='down' in mountOnEnter unmountOnExit key={budgetItem.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatarBudget}>
                                <FcRating/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`Budget for ${budgetItem.weekEnding[1]} of ${budgetItem.weekEnding[0]}`} secondary={`₱${weekEndingBalance(budgetItem)}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick={()=> deleteBudget(budgetItem.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
                // }
               
            })}
        </List>    
    )
}

export default BudgetList;