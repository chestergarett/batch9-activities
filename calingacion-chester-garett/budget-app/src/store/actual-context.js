import {createContext} from 'react';

const ActualContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: ()=>{},
})


export default ActualContext;