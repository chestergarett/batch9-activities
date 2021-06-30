import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const[isModal, setIsModal] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsModal(false);
    };

    const startModalHandler = () => {
        setIsModal(true);
    }

    const closeModalHandler = () =>{
        setIsModal(false);
    }

    return (
    <div className="new-expense">
        {!isModal && <button onClick={startModalHandler}>Add New Expense</button>}
        {isModal && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeModalHandler}/>}
    </div>)
};

export default NewExpense;