import React from 'react';
import { shallow } from 'enzyme';
import Notifications  from './Notifications';



describe('Notifications', () => {
    //test that Notifications renders without crashing
    test('renders without crashing', () => {
      shallow(<Notifications />);
    });
  
    //verify that Notifications renders three list items
    test('renders three list items', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('li').length).toBe(3);
    });
  
    //verify that Notifications renders the text Here is the list of notifications
    test('renders the text "Here is the list of notifications"', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});