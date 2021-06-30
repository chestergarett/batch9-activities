import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from'./components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Queen\'s Wings', amount: 100, date: new Date(2021,1,28)},
  {id: 'e2', title: 'Oracle', amount: 101.5, date: new Date(2021,2,15)},
  {id: 'e3', title: 'Golden Staff', amount: 60.50, date: new Date(2021,3,10)},
  {id: 'e4', title: 'Blades of Despair', amount: 120.4, date: new Date(2021,4,13)}
  ]
  
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
