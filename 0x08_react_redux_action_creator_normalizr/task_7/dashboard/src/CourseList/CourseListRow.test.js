import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import Adapter from '../../config/setupTests';

describe('CourseListRow', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<CourseListRow textFirstCell='test'/>);
        expect(wrapper.exists()).toBe(true);
    });
    
//when isHeader is true:
    it('renders one cell with no textSecondCell and isHeader is true and with the right bgcolor', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
        expect(wrapper.find('th').props().colSpan).toEqual(2);
        expect(wrapper.text()).toEqual('Test ');
        expect(wrapper.find('tr').props().style).toEqual({ backgroundColor: "#deb5b545" });
    }); 
    
    it('renders two cells when textSecondCell is present and isHeader is true and with the right bgcolor', () => {
        const wrapper = shallow(<CourseListRow isHeader={true}  textFirstCell="Test" textSecondCell="Test2" />);
        expect(wrapper.find('th').at(0).text()).toEqual('Test');
        expect(wrapper.find('th').at(1).text()).toEqual('Test2');
        expect(wrapper.find('tr').props().style).toEqual({ backgroundColor: "#deb5b545" });
    });
    
//when isHeader is false:
   it('renders correctly two td elements within a tr element when isHeader is false and with the right bgcolor', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('td').at(0).text()).toEqual('Test');
    expect(wrapper.find('td').at(1).text()).toEqual('Test2');
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('tr').props().style).toEqual({ backgroundColor: "#f5f5f5ab" });
   });
});

