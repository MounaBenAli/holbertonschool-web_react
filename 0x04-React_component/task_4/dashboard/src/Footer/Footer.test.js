import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

// Tests for the Footer component
describe('Footer component', () => {
    it('should render without crashing', () => {
      shallow(<Footer />);
    });
  
    it('should render "Copyright" text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
  });
