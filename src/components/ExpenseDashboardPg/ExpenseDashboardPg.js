import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseList/ExpenseListFilters';

const ExpenseDashboardPg = () => (
    <div>
      <ExpenseListFilters></ExpenseListFilters>
      <ExpenseList></ExpenseList>
    </div>
  );

export default ExpenseDashboardPg;