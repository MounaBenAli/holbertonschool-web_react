import React from 'react';
import { mount, shallow } from 'enzyme';
import WithLogging from './WithLogging';

const PureHtmlComponent = () => <p>Test</p>
const Login = () => <p>Login Component</p>

// Testing HOC In Progress
describe('WithLogging HOC', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should call console.log on mount and unmount with PureHtmlComponent', () => {
        const WrappedComponent = WithLogging(PureHtmlComponent);
        const wrapper = mount(<WrappedComponent />);
        expect(consoleSpy).toHaveBeenCalledWith('Component PureHtmlComponent is mounted');
        wrapper.unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component PureHtmlComponent is going to unmount');
    });

    it('should call console.log on mount and unmount with Login', () => {
        const WrappedComponent = WithLogging(Login);
        const wrapper = mount(<WrappedComponent />);
        expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    });

});