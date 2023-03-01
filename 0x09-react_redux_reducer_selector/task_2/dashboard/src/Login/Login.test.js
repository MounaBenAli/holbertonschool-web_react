import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import adapter from '../../config/setupTests';

// Tests for the Login component
describe('Login  component', () => {
    it('should render without crashing', () => {
      shallow(<Login />);
    });
  
    it('should render an img and h1 tag', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('input').length).toBe(2);
      expect(wrapper.find('label').length).toBe(2);
    });
  });

// Test for the submit button
describe('Login component', () => {
  it('should render an enabled submit button after changing inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[name="password"]').simulate('change', { target: { value: 'test123' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});