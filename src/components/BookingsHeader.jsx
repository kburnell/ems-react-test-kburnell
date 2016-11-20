import React from 'react';
import Calendar from 'rc-calendar/lib/Calendar';
import enUS from 'rc-calendar/lib/locale/en_US';

const moment = require('moment');

export class BookingsHeader extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    showCalendar() {
        return this.props.showCalendar;
    }
    render() {
        return (
            <div className="bookings-header">
                <span onClick={() => this.props.setCalendarVisibility(this.props.showCalendar)}>{getFormattedDate(this.props.selectedDate)} <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                <div className="bookings-header-actions">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                {this.showCalendar() ?
                    <div className="calendar-panel">
                        <Calendar
                            ref='calendar'
                            locale={enUS}
                            showDateInput={false}
                            style={{ zIndex: 1000 }}
                            defaultValue={getDate(this.props.selectedDate)}
                            onChange={(newDate) => this.props.changeSelectedDate(newDate)}
                        />
                    </div>
                : null}
            </div>
        );
    }
}

function getDate(date) {
    return moment(date);
}

function getFormattedDate(date) {
    return moment(date).format('MMMM YYYY');
}
