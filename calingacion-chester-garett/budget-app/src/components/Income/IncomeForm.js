import {useState, useContext} from 'react';
import ActualContext from '../../store/actual-context';
import { incomeCategories } from '../../constants/categories.js';
import {v4} from 'uuid';

import {TextField, Card, Paper, InputLabel, Select,FormControl, Button} from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import formatDate from '../../utils/formatDate.js';

const initialState = {
    amount: '0',
    category: 'BPI',
    mainCategory: 'Savings',
    type: 'Income',
    date: formatDate(new Date()),
}

const IncomeForm = () => {
    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(ActualContext);
    const iconIndex = Math.ceil(Math.random()*10)


    const createTransaction = () => {
        if(typeof(Number(formData.amount))!=='number' || formData.amount === '' || formData.amount === '0'  || Number(formData.amount) < 0 
        || !formData.date.includes('-')){
            setFormData(initialState);
            return;
        } 
        
        const transaction = {...formData, amount: Number(formData.amount), id: v4(), icon: iconIndex};
        
        addTransaction(transaction);
        setFormData(initialState);
    }

    
    const optionGroup = Array.from(new Set(incomeCategories.map(category=> category.type)))
    
    return (
            <Paper style={{display: 'flex', flexDirection: 'column'}} elevation={0}>
                <Card style={{padding: '1rem'}} elevation={0}>
                    <FormControl>
                        <InputLabel htmlFor="incomeType" >Account</InputLabel>
                        <Select native id="incomeType" value={formData.category} onChange={(e) =>setFormData({...formData, category:e.target.value, mainCategory: e.target.options[e.target.options.selectedIndex].attributes.group.textContent })}>
                            {optionGroup.map(group => <optgroup label={group} key={group}>
                                {incomeCategories.map(category => {
                                    if(category.type === group){
                                        return <option key={category.id} value={category.subType} group={group}>{category.subType}</option>
                                    }}
                                )}
                            </optgroup>)}
                            </Select>
                    </FormControl>
                    <TextField
                        label="Amount"
                        id="amount"
                        type="number"
                        value={formData.amount || ''}
                        onChange={(e)=> setFormData({...formData, amount: e.target.value})}
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
                    <Button
                        variant="contained"
                        style={{backgroundColor: '#7F9A65',color: 'white'}}
                        startIcon={<AccountBalanceIcon />}
                        type="submit"
                        onClick={createTransaction}
                    >
                        Save
                    </Button> 
                </Card>    
            </Paper>
    )
}

export default IncomeForm;