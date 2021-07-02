import {v4} from 'uuid';

const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { id: v4(), type: 'Savings',  subType:'BPI', amount: 0, color: incomeColors[0]},
  { id: v4(), type: 'Savings',  subType:'Eastwest', amount: 0, color: incomeColors[1]},
  { id: v4(), type: 'Payroll',  subType:'BPI', amount: 0, color: incomeColors[2] },
  { id: v4(), type: 'Wallets',  subType:'CoinsPH',amount: 0, color: incomeColors[3] },
  { id: v4(), type: 'Wallets',  subType:'BPI Trade',amount: 0, color: incomeColors[4]},
  { id: v4(), type: 'Wallets',  subType:'Gcash',amount: 0, color: incomeColors[5]},
  { id: v4(), type: 'Checking', subType:'BPI', amount: 0, color: incomeColors[6]},
];

export const expenseCategories = [
  { id: v4(), subType: 'Electricity', type: 'Variable', amount: 0, color: expenseColors[0] },
  { id: v4(), subType: 'Water', type: 'Variable', amount: 0, color: expenseColors[1] },
  { id: v4(), subType: 'Breakfast', type: 'Variable', amount: 0, color: expenseColors[2] },
  { id: v4(), subType: 'Lunch', type: 'Variable', amount: 0, color: expenseColors[3] },
  { id: v4(), subType: 'Dinner', type: 'Variable', amount: 0, color: expenseColors[4] },
  { id: v4(), subType: 'Snacks', type: 'Variable', amount: 0, color: expenseColors[5] },
  { id: v4(), subType: 'Netflix', type: 'Fixed', amount: 0, color: expenseColors[6] },
  { id: v4(), subType: 'Spotify', type: 'Fixed', amount: 0, color: expenseColors[7] },
  { id: v4(), subType: 'Rent', type: 'Fixed', amount: 0, color: expenseColors[8] },
  { id: v4(), subType: 'Internet', type: 'Variable', amount: 0, color: expenseColors[9] },
  { id: v4(), subType: 'Load', type: 'Variable', amount: 0, color: expenseColors[10] },
  { id: v4(), subType: 'Girlfriend', type: 'Variable', amount: 0, color: expenseColors[11] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};