import { useContext } from 'react';
import  ActualContext  from './store/actual-context';
import  BudgetContext  from './store/budget-context';
import {randomRGB} from './utils/randomRGB.js';
import { incomeCategories, expenseCategories, resetCategories} from './constants/categories';


const useVariance = () => {
    resetCategories();
    const { transactions } = useContext(ActualContext)
    const { budget, weekEndingBalance } = useContext(BudgetContext)
    const expenseTransactions = transactions.filter((t)=>t.type === "Expense");

    //grouping by function of main category
    let actualExpenses = []
    expenseTransactions.reduce(function(res, value) {
        if (!res[value.category]) {
          res[value.category] = { category: value.category, amount: 0 };
          actualExpenses.push(res[value.category])
        }
        res[value.category].amount += value.amount;
        return res;
      }, {});

      const aggregatedExpenses = [...expenseTransactions.reduce((r, o) => {
        const key = o.weekEndingText + '-' + o.category;
        
        const item = r.get(key) || Object.assign({}, o, {
          amount: 0,
        });
        
        item.amount += o.amount;
      
        return r.set(key, item);
      }, new Map).values()];


  console.log(budget)
  
  return { expenseTransactions}
}

export default useVariance;