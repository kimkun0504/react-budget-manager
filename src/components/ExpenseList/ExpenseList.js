import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../../selectors/expenses';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Exh1ense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);