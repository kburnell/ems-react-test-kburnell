import React from 'react';

import {BookingsListDay} from '../components/BookingsListDay';

export class BookingsList extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div ref='bookingsList' className="bookings-list">
                {this.props.bookings.map((group, i) =>
                    <BookingsListDay key={i} date={group.get('date')} bookings={group.get('bookings')} />
                )}
            </div>
        );
    }
}
