import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from './store/reducers/expenses';
import filtersReducer from './store/reducers/filters';
import { startSetExpenses } from './store/actions/expenses';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
import { history } from './routers/AppRouter';
import authReducer from './store/reducers/auth';
import { login, logout } from './store/actions/auth';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer,
});

// Creating the Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        {console.log(store.getState())}
        <App />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render( app , document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render( <p>Loading...</p> , document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        // console.log('uid', user.uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
