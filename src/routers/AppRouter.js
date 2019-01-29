import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPg from '../components/ExpenseDashboardPg/ExpenseDashboardPg';
import HelpPg from '../components/HelpPg/HelpPg';
import EditExpensePg from '../components/EditExpensePg/EditExpensePg';
import AddExpensePg from '../components/AddExpensePg/AddExpensePg';
import ErrorPg from '../components/ErrorPg/ErrorPg';
import Header from '../components/Header/Header';

    const AppRouter = () => (
        <BrowserRouter>
          <div>
            <Header></Header>
            <Switch>
              <Route path='/' component={ExpenseDashboardPg} exact={true}/>
              <Route path='/create' component={AddExpensePg}/>
              <Route path='/edit/:id' component={EditExpensePg}/>
              <Route path='/help' component={HelpPg}/>
              <Route component={ErrorPg}/>
            </Switch>
          </div>
        </BrowserRouter>
    );

    export default AppRouter;