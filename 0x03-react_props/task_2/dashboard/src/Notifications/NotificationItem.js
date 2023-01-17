import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  if (value) {
    return ( <li data-priority={type}>{value}</li> );
  }
  return ( <li data-priority={type} dangerouslySetInnerHTML={{__html: html }} /> );
}
export default NotificationItem;