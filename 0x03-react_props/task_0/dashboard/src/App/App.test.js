import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

//test that App renders without crashing
describe('App', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
    });
  });

