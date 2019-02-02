import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../App.css';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            notes: props.expense ? props.expense.notes : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        };
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNotesChange = (e) => {
        e.persist();
        this.setState(() => ({ notes: e.target.value }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,7}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        // handling no input errors
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please fill all required fields'}))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return(
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id='calendar_id_one'
                    />
                    <textarea 
                        placeholder="Additional notes (optional)"
                        className="textarea"
                        value={this.state.notes}
                        onChange={this.onNotesChange}
                    />
                    <div>
                        <button className="button--add">Save Expense</button>

                    </div>
                </form>
        )
    }
};

export default ExpenseForm;