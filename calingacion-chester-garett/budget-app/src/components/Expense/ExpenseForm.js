import {useContext, useState} from 'react';
import { Paper, Card, TextField, Button, FormControl, InputLabel, Select } from "@material-ui/core"
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import {v4} from 'uuid';

import ActualContext from '../../store/actual-context.js'
import formatDate from '../../utils/formatDate.js'
import getWeekNumber from '../../utils/getWeekNumber.js';

import { expenseCategories } from '../../constants/categories.js';


const initialState = {
    amount: '0',
    category: 'Electricity',
    mainCategory: 'Variable',
    type: 'Expense',
    date: formatDate(new Date()),
}


const ExpenseForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(false);
    const {addTransaction} = useContext(ActualContext)
    const iconIndex = Math.ceil(Math.random()*10)

    const createTransaction = () => {
       
        if(typeof(Number(formData.amount))!=='number' || formData.amount === '' || formData.amount === '0' ||  Number(formData.amount) < 0 ||
        !formData.date.includes('-')){
            setFormData(initialState);
            setError(true)
            return;
        } 
        
        const transaction = {...formData, amount: Number(formData.amount), id: v4(), weekEndingText: getWeekNumber(new Date(formData.date))[0], icon: iconIndex};
        
        addTransaction(transaction);
        setError(false);
        setFormData(initialState);
    }


    const optionGroup = Array.from(new Set(expenseCategories.map(category=> category.type)))
    return (
        <Paper style={{display: 'flex', flexDirection: 'column'}} elevation={0}>
                <Card style={{padding: '1rem'}} elevation={0}>
                    <FormControl>
                        <InputLabel htmlFor="expenseType">Expense</InputLabel>
                        <Select native id="expenseType" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value, mainCategory: e.target.options[e.target.options.selectedIndex].attributes.group.textContent })}>
                            {optionGroup.map(group => <optgroup label={group} key={group}>
                                {expenseCategories.map(category => {
                                    if(category.type === group){
                                        return <option key={category.id} value={category.subType} group={group}>{category.subType}</option>
                                    } return; } 
                                )}
                            </optgroup>)}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Amount"
                        id="amount"
                        type="number"
                        onChange={(e)=> setFormData({...formData, amount: e.target.value})}
                        value={formData.amount || ''}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]'}}
                    />
                    <TextField 
                        id="date"
                        type="date" 
                        label="Date" 
                        value={formData.date}
                        onChange={(e)=> setFormData({...formData, date: formatDate(e.target.value)})}
                    />
                </Card>
                <Card style={{padding: '1rem', display: 'flex', justifyContent: 'center'}} elevation={0}>
                    {error && <p style={{color: '#8A0707'}}>Please record an amount.</p>}
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<RemoveShoppingCartIcon />}
                        type="submit"
                        onClick={createTransaction}
                    >
                        Spend
                    </Button>
                </Card>
        </Paper>    
        )
}

export default ExpenseForm;