import { useContext } from 'react';
import  ActualContext  from './store/actual-context';
import {randomRGB} from './utils/randomRGB.js';
import { incomeCategories, expenseCategories, resetCategories} from './constants/categories';


const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ActualContext)
    const transactionsPerType = transactions.filter((t)=>t.type === title);
    const total = transactionsPerType.reduce((acc, currVal)=> acc +=currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    //grouping by function of main category
    let categoryGroup = []
    transactionsPerType.reduce(function(res, value) {
        if (!res[value.mainCategory]) {
          res[value.mainCategory] = { mainCategory: value.mainCategory, amount: 0 };
          categoryGroup.push(res[value.mainCategory])
        }
        res[value.mainCategory].amount += value.amount;
        return res;
      }, {});

    //grouping by function of detail category
    let detailCategoryGroup = []
    transactionsPerType.reduce(function(res, value) {
        if (!res[value.category]) {
          res[value.category] = { category: value.category, amount: 0 };
          detailCategoryGroup.push(res[value.category])
        }
        res[value.category].amount += value.amount;
        return res;
      }, {});

      //grouping by function by Week
    let weeklyGroup = []
    transactionsPerType.reduce(function(res, value) {
        if (!res[value.weekEndingText]) {
          res[value.weekEndingText] = { category: value.weekEndingText, amount: 0 };
          weeklyGroup.push(res[value.weekEndingText])
        }
        res[value.weekEndingText].amount += value.amount;
        return res;
      }, {});


    //filtering whether income or expense
    transactionsPerType.forEach((t)=>{
        const category = categories.find((c)=> c.category===t.subType)
        if(category){category.amount += t.amount;}
    })

    //category grouping data
    const filteredCategories = categoryGroup.filter(c => c.amount>0);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c)=> c.amount),
            backgroundColor: filteredCategories.map((c)=> randomRGB())
        }],
        labels: filteredCategories.map((c)=>c.mainCategory)
    }

    //detail grouping data
    const detailFilteredCategories = detailCategoryGroup.filter(c => c.amount>0);
    const detailChartData = {
        datasets: [{
            data: detailFilteredCategories.map((c)=> c.amount),
            backgroundColor: detailFilteredCategories.map((c)=> randomRGB())
        }],
        labels: detailFilteredCategories.map((c)=>c.category)
    }

    //detail grouping data
    const weeklyFilteredCategories = weeklyGroup.filter(c => c.amount>0);
    const weeklyChartData = {
        datasets: [{
            data: weeklyFilteredCategories.map((c)=> c.amount),
            backgroundColor: weeklyFilteredCategories.map((c)=> randomRGB())
        }],
        labels: weeklyFilteredCategories.map((c)=>c.category)
    }

    return { total, chartData, detailChartData,weeklyChartData}
}
export default useTransactions;