import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPg from '../components/ExpenseDashboardPg/ExpenseDashboardPg';
import EditExpensePg from '../components/EditExpensePg/EditExpensePg';
import AddExpensePg from '../components/AddExpensePg/AddExpensePg';
import ErrorPg from '../components/ErrorPg/ErrorPg';
import LoginPage from '../auth/LoginPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

    export const history = createHistory();

    const AppRouter = () => (
        <Router history={history}>
          <div>
            <Switch>
              <PublicRoute path='/' component={LoginPage} exact={true}/>
              <PrivateRoute path='/dashboard' component={ExpenseDashboardPg}/>
              <PrivateRoute path='/create' component={AddExpensePg}/>
              <PrivateRoute path='/edit/:id' component={EditExpensePg}/>
              <Route component={ErrorPg}/>
            </Switch>
          </div>
        </Router>
    );

    export default AppRouter;