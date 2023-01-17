import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


//test that App renders without crashing
describe('App', () => {
    
    it('should contain the Header component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Header).length).toBe(1);
    });
  
    it('should contain the Login component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Login).length).toBe(1);
    });
  
    it('should contain the Footer component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Footer).length).toBe(1);
    });
  });

