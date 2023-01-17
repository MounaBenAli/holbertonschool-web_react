import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFullYear}  from '../utils/utils';

// Tests for the Footer component
describe('Footer component', () => {

    // Test case to check if the header element has the correct class
    it('should have a class of "footer" on the footer element', () => {
        const wrapper = shallow(<Footer />);
        const footer = wrapper.find('footer');
        expect(footer.hasClass('footer')).toBe(true);
    });
});