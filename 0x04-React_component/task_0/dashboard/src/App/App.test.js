import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


describe('App', () => {
    it('should contain the Notifications component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Notifications).length).toBe(1);
    });

    it('should contain the Header component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Header).length).toBe(1);
    });
  
    it('should contain the Login component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Login).length).toBe(1);
    });

    it('should not contain the CourseList component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(CourseList).length).toBe(0);
    });
  
    it('should contain the Footer component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Footer).length).toBe(1);
    });
});

describe('when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);

  it('does not display the Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('displays the CourseList component', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
