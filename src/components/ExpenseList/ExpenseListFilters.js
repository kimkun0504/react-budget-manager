import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../store/actions/filters';
import {DateRangePicker} from 'react-dates';
import './ExpenseListFilters.css';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = ( calendarFocused ) => {
        this.setState(() => ({ calendarFocused }));
    };

    render(){
        return (
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type="text" 
                        className="text-input"
                        placeholder="Search expenses"
                        value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} />
                </div>
                <div>
                    <select 
                        className="select"
                        value={this.props.filters.sortBy} 
                        onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }   
                        }}>
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                    </select>
                </div>
                <div>
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,  
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);