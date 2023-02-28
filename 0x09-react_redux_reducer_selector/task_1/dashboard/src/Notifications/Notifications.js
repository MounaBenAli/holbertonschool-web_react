import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '2px #e01d3f',
    borderStyle: 'dotted',
    padding: '10px',
    marginLeft: '58rem',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    fontWeight: 'bold',
    animationName: {
      from: { transform: 'translateY(0px)' },
      '33%': { transform: 'translateY(-5px)' },
      '66%': { transform: 'translateY(5px)' },
      to: { transform: 'translateY(0px)' },
    },
    animationDuration: '0.5s',
    animationIterationCount: 3,
    animationTimingFunction: 'ease-in-out',
  },
  ul: {
    padding: '0',
  },
  '@media only screen and (max-width: 900px)': {
    notifications: {
      fontSize: '20px',
    },
    menuItem: {
      margin: '0',
    },
  },
});


class Notifications extends PureComponent  {

  render() {
    const { 
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

  
    return (
      <>
        {displayDrawer && 
          <div className={css(styles.notifications)}>  
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
              <p>Your notifications</p>
            </div>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? 
                  <li>No new notification for now</li> 
                  : 
                  listNotifications.map((notification) => (
                  <NotificationItem 
                    key={notification.id} 
                    type={notification.type} 
                    html={notification.html} 
                    value={notification.value}
                    markAsRead={markNotificationAsRead}
                />
              ))}
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
             onClick={handleHideDrawer}
            >
              <img
                style={{ width: "20px" }}
                src={close_icon}
                alt="close icon" />
            </button>
          </div>
        }
      </>
    );
  }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
}

export default Notifications;

