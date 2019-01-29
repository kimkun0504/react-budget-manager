import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseList/ExpenseListFilters';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';

const ExpenseDashboardPg = () => (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );

export default ExpenseDashboardPg;