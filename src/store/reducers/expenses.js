const expenseInitialState = [];

const expensesReducer = (state = expenseInitialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense,
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 400, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter( 'rent' ));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

export default expensesReducer;