import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {expect} from 'chai';

import {BookingsHeader} from '../../src/components/BookingsHeader';

describe('BookingsHeader', () => {

    it('renders expected elements', () => {
        const component = renderIntoDocument(
            <BookingsHeader />
        );

        const span = scryRenderedDOMComponentsWithTag(component, 'span');
        const images = scryRenderedDOMComponentsWithTag(component, 'i');

        expect(span.length).to.equal(1);
        expect(images.length).to.equal(2);
        expect(images[0].className).to.equal('fa fa-search');
        expect(images[1].className).to.equal('fa fa-plus');
    });

    it('renders expected values', () => {
        const selectedDate = new Date(2016, 10, 18);
        const component = renderIntoDocument(
            <BookingsHeader selectedDate={selectedDate} />
        );

        const span = scryRenderedDOMComponentsWithTag(component, 'span');

        expect(span[0].textContent).to.equal('November 2016');
    });

});
