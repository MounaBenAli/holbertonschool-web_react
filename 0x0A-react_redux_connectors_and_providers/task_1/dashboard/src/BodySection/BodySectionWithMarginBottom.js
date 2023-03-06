import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    BodySectionWithMarginBottom: {
        marginBottom: '32px',
    },
  });



class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, children } = this.props;
        return (
        <div  className={css(styles.BodySectionWithMarginBottom)}>
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
