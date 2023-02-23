import React, { Component } from 'react';



const WithLogging = (WrappedComponent) => {
    const WrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
class Wrapper extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponentName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComponentName} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
}
  Wrapper.displayName = `WithLogging(${WrappedComponentName})`;
  return Wrapper;
};

export default WithLogging;