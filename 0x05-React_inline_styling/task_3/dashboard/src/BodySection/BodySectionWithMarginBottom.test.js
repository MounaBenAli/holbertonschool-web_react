import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import adapter from '../../config/setupTests'

//testing the BodySectionWithMarginBottom component
describe('should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    let wrapper;
    const title = "test title";
    const children = <p>test children node</p>;
    beforeEach(() => {
        wrapper = shallow(<BodySectionWithMarginBottom title={title}>{children}
    </BodySectionWithMarginBottom>);
    });

    it('should render a BodySection component', () => {
        expect(wrapper.find(BodySection).exists()).toBe(true);
    });

    it('should pass the props correctly to the child component', () => {
        expect(wrapper.find(BodySection).props().title).toEqual(title);
        expect(wrapper.find(BodySection).props().children).toEqual(children);
    });
});

