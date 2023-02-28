import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import adapter from '../../config/setupTests';


//test that App renders without crashing
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

    //test that checks CourseList is not displayed (when logged out)
    it('should not contain the CourseList component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(CourseList).length).toBe(0);
    });
  
    it('should contain the Footer component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Footer).length).toBe(1);
    });
  });

// When isLoggedIn is true 
describe('when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);

  //check that verifies Login component is not included
  it('does not display the Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  //check that verifies CourseList component is included
  it('displays the CourseList component', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
 

//When the user is pressing down the control and the h keys simultaneously
describe('when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);

  //check that verifies Login component is not included
  it('does not display the Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  //check that verifies CourseList component is included
  it('displays the CourseList component', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });


});

//When the user is pressing down the control and the h keys simultaneously
describe('when logOut is true', () => {

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
});


//verify that the default state for displayDrawer is false && after calling handleDisplayDrawer, the state should now be true
describe('default displayDrawer state', () => {
  const wrapper = shallow(<App />);
  it('default state displayDrawer is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer changes displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });
});

// verify that after calling handleHideDrawer, the state is updated to be false
describe('updates state of displayDrawer to false after calling handleHideDrawer', () => {
  const wrapper = shallow(<App />);
  it('handleHideDrawer changes displayDrawer to false', () => {
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});