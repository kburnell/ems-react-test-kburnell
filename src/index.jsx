import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import {setState} from './action_creators';
import App from './containers/App';
import {BookingsContainer} from './containers/Bookings';
import {BookingContainer} from './containers/Booking';

require("font-awesome-webpack");
require('./site.less');


const _ = require('lodash');
const moment = require('moment');
const store = createStore(reducer);

//load bookings
var bookings = require("json-loader!../prototype/bookings.json").bookings;
bookings = _.chain(bookings)
    .groupBy(function(booking) {
        return moment(booking.start).startOf('day').format();
    })
    .map(function(dayBookings, day){
        return {
            date: day,
            bookings: dayBookings
        };
    })
    .sortBy('date')
    .value();

//load initial state
store.dispatch(setState({
        selectedDate: new Date,
        bookings: bookings
    }
));

const routes = <Route component={App}>
    <Route path="/booking" component={BookingContainer} />
    <Route path="/" component={BookingsContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
