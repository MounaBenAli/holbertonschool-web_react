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

//verify that App renders a div with the class App-header
describe('App', () => {
    test('renders a div with class App-header', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-header').hasClass('App-header')).toBe(true);
    });
  });

//verify that App renders a div with the class App-body
describe('App', () => {
    test('renders a div with class App-body', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-body').hasClass('App-body')).toBe(true);
    });
  });

//verify that App renders a div with the class App-footer
describe('App', () => {
    test('renders a div with class App-footer', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-footer').hasClass('App-footer')).toBe(true);
    });
  });