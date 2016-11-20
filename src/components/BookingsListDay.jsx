import React from 'react';

import {BookingsListDayHeader} from '../components/BookingsListDayHeader';
import {BookingsListDayEventList} from '../components/BookingsListDayEventList';

export class BookingsListDay extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div key="{this.props.key}" className="bookings-list-day">
                <BookingsListDayHeader date={this.props.date} />
                <BookingsListDayEventList events={this.props.bookings} />
            </div>
        );
    }
}
