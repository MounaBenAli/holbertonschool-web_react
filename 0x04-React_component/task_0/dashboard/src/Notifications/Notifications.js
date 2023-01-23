import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications  }) => {
  return (
    <>
          <div className='menuItem'>
            <p>Your notifications</p>
          </div>
      {displayDrawer ? 
          <div className='Notifications'>  
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? 
                <li>No new notification for now</li> 
                : 
                listNotifications.map(notification => <NotificationItem key={notification.id} {...notification} />)
            }
          </ul>
          <button
            type="button"
            aria-label="close"
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: `#fff`,
              float: `right`,
              position: `relative`,
              top: '-142px',
              right: '-16px',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Close button has been clicked')}
          >
            <img
              style={{ width: "20px" }}
              src={close_icon}
              alt="close icon" />
          </button>
          </div>
      : null}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;

