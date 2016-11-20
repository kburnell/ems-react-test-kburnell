import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {expect} from 'chai';

import {BookingsListDayHeader} from '../../src/components/BookingsListDayHeader';

describe('BookingsListDayHeader', () => {

    it('renders expected elements', () => {
        const date = new Date(2016, 10, 18);
        const component = renderIntoDocument(
            <BookingsListDayHeader date={date} />
        );

        const span = scryRenderedDOMComponentsWithTag(component, 'span');

        expect(span.length).to.equal(1);
    });

    it('renders expected values', () => {
        const date = new Date(2016, 10, 18);
        const component = renderIntoDocument(
            <BookingsListDayHeader date={date} />
        );

        const span = scryRenderedDOMComponentsWithTag(component, 'span');

        expect(span[0].textContent).to.equal('Fri Nov 18');
    });

});
