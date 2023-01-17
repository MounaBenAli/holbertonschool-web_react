import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

// Tests for the Header component
describe('Header component', () => {
   
    // Test case to check if the h1 tag is rendered with the correct text
    it('should render a h1 tag with the correct text', () => {
        const wrapper = shallow(<Header />);
        const h1 = wrapper.find('h1');
        expect(h1.text()).toEqual(' School dashboard ');
    });

    // Test case to check if the header element has the correct class
    it('should have a class of "header" on the header element', () => {
        const wrapper = shallow(<Header />);
        const header = wrapper.find('header');
        expect(header.hasClass('header')).toBe(true);
    });
});