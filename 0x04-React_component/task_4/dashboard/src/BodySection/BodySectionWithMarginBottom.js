import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySection.css';

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, children } = this.props;
        return (
        <div className='BodySectionWithMarginBottom'>
            <BodySection {...this.props}/>
        </div>
        );
    }
}


BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}
  
BodySectionWithMarginBottom.defaultProps = {
    title: '',
    children: null,
}
  

export default BodySectionWithMarginBottom;
