import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  if (value) {
    return ( <li data-priority={type}>{value}</li> );
  }
  return ( <li data-priority={type} dangerouslySetInnerHTML={{__html: html }} /> );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string,
  }

NotificationItem.defaultProps = {
  type: 'default',
  html: { __html: '' },
  value: '',
  }
export default NotificationItem;