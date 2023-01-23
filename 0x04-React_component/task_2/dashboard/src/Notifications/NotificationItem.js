import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  if (value) {
    return ( <li data-priority={type}>{value}</li> );
  }
  return ( <li  data-priority={type}
                dangerouslySetInnerHTML={{__html: html }} 
                onClick={() => markAsRead(id)}
         /> );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
  }

NotificationItem.defaultProps = {
  type: 'default',
  html: { __html: '' },
  value: '',
  markAsRead: () => undefined,
  }
export default NotificationItem;