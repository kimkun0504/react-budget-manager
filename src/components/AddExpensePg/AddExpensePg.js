import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startAddExpense } from '../../store/actions/expenses';


export class AddExpensePg extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}
// const AddExpensePg = (props) => (
//     <div>
//       <h1>Add Expense</h1>
//       <ExpenseForm 
//         onSubmit={(expense) => {
//           props.dispatch(addExpense(expense));
//           props.history.push('/');
//         }}
//       />
//     </div>
//   );

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePg);