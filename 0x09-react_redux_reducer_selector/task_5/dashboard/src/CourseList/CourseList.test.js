import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import adapter from '../../config/setupTests';

//checks for the component named CourseList
describe('<CourseList />', () => {
  //Tests if CourseList component renders without crashing 
    it('renders without crashing', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).toEqual(true);
    });
});

