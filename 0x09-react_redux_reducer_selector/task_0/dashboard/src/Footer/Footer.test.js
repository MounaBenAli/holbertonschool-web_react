import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import adapter from '../../config/setupTests';
import AppContext from '../App/AppContext';

// Refactored Tests for the Footer component
describe('Footer component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should render "Copyright" text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('should not display the "Contact us" link when the user is not logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ isLoggedIn: false }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBeFalsy();
  });

  it('should display the "Contact us" link when the user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ isLoggedIn: true }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBeTruthy();
    expect(wrapper.find('a').text()).toEqual('Contact us');
  });
});