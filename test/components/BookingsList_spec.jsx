import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';

import {BookingsList} from '../../src/components/BookingsList';

describe('BookingsList', () => {

    it('renders expected elements', () => {
        const bookings = List.of(
            Map({'date': '2016-11-10T00:00:00.000Z', 'bookings': []}),
            Map({'date': '2016-11-11T00:00:00.000Z', 'bookings': []})
        );
        const component = renderIntoDocument(
            <BookingsList bookings={bookings} />
        );

        const days = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day');

        expect(days.length).to.equal(2);
    });

});
