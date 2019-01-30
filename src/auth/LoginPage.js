import {connect} from 'react-redux';
import {startLogin} from '../store/actions/auth';
import React from 'react';
import './LoginPage.css';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Trck Expense</h1>
            <p>Track Your Daily Expenses</p>
            <button className="button-login" onClick={startLogin}>Google Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);