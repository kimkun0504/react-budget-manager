import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { addExpense } from '../../store/actions/expenses';

const AddExpensePg = (props) => (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
export default connect()(AddExpensePg);