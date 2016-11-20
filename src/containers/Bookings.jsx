import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';
import {BookingsHeader} from '../components/BookingsHeader';
import {BookingsList} from '../components/BookingsList';

export class Bookings extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bookings">
                <BookingsHeader {...this.props} />
                <BookingsList {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedDate: state.get('selectedDate'),
        bookings: state.get('bookings'),
        showCalendar: state.get('showCalendar')
    };
}

export const BookingsContainer = connect(mapStateToProps, actionCreators)(Bookings);
