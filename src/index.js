import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from './store/reducers/expenses';
import filtersReducer from './store/reducers/filters';
import { startSetExpenses } from './store/actions/expenses';
import './firebase/firebase';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
});

// Creating the Store
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        {console.log(store.getState())}
        <App />
    </Provider>
);

ReactDOM.render( <p>Loading...</p> , document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render( app , document.getElementById('root'));
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
