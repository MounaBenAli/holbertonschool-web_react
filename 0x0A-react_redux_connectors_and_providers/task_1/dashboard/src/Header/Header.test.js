import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import adapter from '../../config/setupTests';


// Tests for the Header component
describe('Header component', () => {
    it('should render without crashing', () => {
      shallow(<Header />);
    });
  
    it('should render an img and h1 tag', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('img').length).toBe(1);
      expect(wrapper.find('h1').length).toBe(1);
    });
  });
