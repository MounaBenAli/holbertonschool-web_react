import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import adapter from '../../config/setupTests';

//testing the BodySection component
describe('should render correctly the children and one h2 element', () => {
    let wrapper;
    const title = "test title";
    const children = <p>test children node</p>;
    beforeEach(() => {
      wrapper = shallow(<BodySection title={title}>{children}</BodySection>);
    });

    it('should render correctly', () => {
      expect(wrapper.find('h2').text()).toEqual(title);
      expect(wrapper.find('p').text()).toEqual('test children node');
    });
});

