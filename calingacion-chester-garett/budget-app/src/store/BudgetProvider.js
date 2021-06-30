import {useReducer} from 'react';
import BudgetReducer from './budget-reducer';
import BudgetContext from './budget-context';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

const BudgetProvider = props => {
    const [transactions, dispatch] = useReducer(BudgetReducer, initialState);

    const deleteTransaction = (id) => {dispatch({type: 'DELETE_TRANSACTION', payload: id});}

    const addTransaction = (transaction) => {dispatch({type: 'ADD_TRANSACTION', payload: transaction})}
    
    const balance = transactions.reduce((acc, currVal)=>{
        return (currVal.type === 'Expense' ? acc-currVal.amount : acc + currVal.amount)
    },0);


    return <BudgetContext.Provider value={{
        deleteTransaction, addTransaction, transactions, balance
    }}>
        {props.children}
    </BudgetContext.Provider>
};

export default BudgetProvider;