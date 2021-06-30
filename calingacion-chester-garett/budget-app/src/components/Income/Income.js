import {useState, useContext} from 'react';
import BudgetContext from '../../store/budget-context';
import { incomeCategories } from '../../constants/categories.js';
import {v4} from 'uuid';

import MainContainer from '../UI/MainContainer';
import {TextField, InputLabel, Select,FormControl, Button, MenuItem} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import formatDate from '../../utils/formatDate.js'

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}


const Income = () => {
    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(BudgetContext);

    const createTransaction = () => {
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
        
        const transaction = {...formData, amount: Number(formData.amount), id: v4()};
        
        console.log(transaction);
        addTransaction(transaction);
        setFormData(initialState);
    }
    
    const selectedCategories =  incomeCategories;
    console.log(selectedCategories)
    return (
        <MainContainer>
                <FormControl>
                    <InputLabel htmlFor="age-native-helper">Account</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}    
                    </Select>
                </FormControl>
                <TextField
                    label="Amount"
                    id="mui-theme-provider-standard-input"
                    type="number"
                    onChange={(e)=> setFormData({...formData, amount: e.target.value})}
                    />
                <TextField 
                    type="date" 
                    label="Date" 
                    value={formatDate(new Date())}
                    onChange={(e)=> setFormData({...formData, date: formatDate(e.target.value)})}
                    />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AttachMoneyIcon />}
                    type="submit"
                    onClick={createTransaction}
                >
                    Save
                </Button>     
        </MainContainer>
    )
}

export default Income;