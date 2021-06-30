import {createContext} from 'react';

const BudgetContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: ()=>{},
})


export default BudgetContext;