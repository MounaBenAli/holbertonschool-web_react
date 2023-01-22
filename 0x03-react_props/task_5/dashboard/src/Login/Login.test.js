import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

// Tests for the Login component
describe('Header component', () => {
    it('should render without crashing', () => {
      shallow(<Login />);
    });
  
    it('should render an img and h1 tag', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('input').length).toBe(2);
      expect(wrapper.find('label').length).toBe(2);
    });
  });
