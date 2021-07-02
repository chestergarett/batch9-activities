

const BudgetReducer = (state,action) => {
    let budget;

    switch (action.type){
        case 'DELETE_BUDGET':
            budget = state.filter((t) => t.id !== action.payload);
            
            localStorage.setItem('budget', JSON.stringify(budget));

            return budget;
        case 'ADD_BUDGET':
            budget = [action.payload, ...state]
            
            localStorage.setItem('budget', JSON.stringify(budget))

            return budget;
        default:
            return state;
    }
}


export default BudgetReducer;