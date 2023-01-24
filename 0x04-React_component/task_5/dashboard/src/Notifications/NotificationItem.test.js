import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('NotificationItem component', () => {
  it('should render without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('should render correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Renders with props', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });
});

//testing the markAsRead property
describe('testing the markAsRead property', () => {
  let wrapper;
  let mockMarkAsRead;
  beforeEach(() => {
    mockMarkAsRead = jest.fn();
    wrapper = shallow(<NotificationItem id={1} markAsRead={mockMarkAsRead} />);
  });

  it('calls markAsRead with the correct id when clicked', () => {
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});