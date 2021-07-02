import {useReducer, useContext} from 'react';
import BudgetReducer from './budget-reducer';
import BudgetContext from './budget-context';
import ActualContext from './actual-context.js';

const initialState = JSON.parse(localStorage.getItem('budget')) || [];

const BudgetProvider = props => {
    
    const {incomeBalance} = useContext(ActualContext)

    const [budget, dispatch] = useReducer(BudgetReducer, initialState);

    const deleteBudget = (id) => {dispatch({type: 'DELETE_BUDGET', payload: id});}

    const addBudget = (budgetItem) => {dispatch({type: 'ADD_BUDGET', payload: budgetItem})}
    
    const budgetBalance = budget.reduce((acc, currVal)=>{
        return(acc + currVal.Netflix + currVal.Spotify + currVal.Rent + currVal.Breakfast + currVal.Lunch + currVal.Dinner + currVal.Snacks + currVal.Water + currVal.Electricity + currVal.Girlfriend)   
    },0);

    const actualVSbudget = incomeBalance -budgetBalance;

    const weekEndingBalance = (budgetItem) => budgetItem.Netflix + budgetItem.Spotify + budgetItem.Rent + budgetItem.Breakfast + budgetItem.Lunch + budgetItem.Dinner + budgetItem.Snacks + budgetItem.Water + budgetItem.Electricity + budgetItem.Girlfriend

    return <BudgetContext.Provider value={{
        deleteBudget, addBudget, budget, budgetBalance, actualVSbudget, weekEndingBalance
    }}>
        {props.children}
    </BudgetContext.Provider>
};

export default BudgetProvider;