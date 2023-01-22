import React from 'react';
import { shallow } from 'enzyme';
import Notifications  from './Notifications';


describe('Notifications', () => {
  //test that Notifications renders without crashing
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  //check that the menu item is being displayed when displayDrawer is false
  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  //check that the div.Notifications is not being displayed when displayDrawer is false
  it('does not display the notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  //check that the menu item is being displayed when displayDrawer is true
  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  //check that the div.Notifications is being displayed when displayDrawer is true
  it('displays the notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
 
});