import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startAddExpense } from '../../store/actions/expenses';
import './AddExpensePg.css';

export class AddExpensePg extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
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