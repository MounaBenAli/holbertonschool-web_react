import React from 'react';
import { mount, shallow } from 'enzyme';
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

   // Add a new test to verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property
   it('renders correctly if listNotifications is empty or not passed', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(0);
    wrapper.setProps({ listNotifications: null });
    expect(wrapper.find('NotificationItem')).toHaveLength(0);
  }); 


});

//testing the function markAsRead
describe('testing the function markAsRead()', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('calls markAsRead and logs the correct message', () => {
    const spy = jest.spyOn(console, 'log');
    wrapper.instance().markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });
});

//testing the pure component Notifications: it only updates itself when the new property listNotifications has a longer list of elements than the previously
describe('Notifications', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications listNotifications={[]} />);
  });

  const listNotifications = [
    { id: 1, type: 'high', html: '<p>Notification 1</p>', value: '' },
    { id: 2, type: 'medium', html: '', value: 'Notification 2' },
    { id: 3, type: 'low', html: '', value: 'Notification 3' },
  ];

  it('should not re-render when updating props with the same list', () => {
    const wrapper = mount(<Notifications displayDrawer listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'render');
    wrapper.setProps({ listNotifications });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should re-render when updating props with a longer list', () => {
    const wrapper = mount(<Notifications displayDrawer listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'render');
    wrapper.setProps({ listNotifications: [...listNotifications, { id: 4, type: 'low', html: '', value: 'Notification 4' }] });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(1);
  });


});