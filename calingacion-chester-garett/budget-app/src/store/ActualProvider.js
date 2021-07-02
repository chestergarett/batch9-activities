import {useReducer} from 'react';
import ActualReducer from './actual-reducer';
import ActualContext from './actual-context';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

const ActualProvider = props => {
    const [transactions, dispatch] = useReducer(ActualReducer, initialState);

    const deleteTransaction = (id) => {dispatch({type: 'DELETE_TRANSACTION', payload: id});}

    const addTransaction = (transaction) => {dispatch({type: 'ADD_TRANSACTION', payload: transaction})}
    
    const incomeBalance = transactions.filter( ({type})=>type === "Income").reduce((acc, currVal)=>{
        return(acc + currVal.amount)   
    },0);

    const expenseBalance = transactions.filter(({type})=>type === "Expense").reduce((acc, currVal)=>{
            return (acc + currVal.amount)   
    },0);

    const totalBalance = incomeBalance - expenseBalance;


    return <ActualContext.Provider value={{
        deleteTransaction, addTransaction, transactions, totalBalance, incomeBalance, expenseBalance
    }}>
        {props.children}
    </ActualContext.Provider>
};

export default ActualProvider;