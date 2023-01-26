import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.css';


const styles = StyleSheet.create({
  notifications: {
    border: '2px #e01d3f',
    borderStyle: 'dotted',
    padding: '10px',
    marginLeft: '58rem',
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    fontWeight: 'bold',
  },

});

class Notifications extends Component  {
   constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
}

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
}

  render() {
    const { displayDrawer, listNotifications } = this.props;
  
      return (
        <>
              <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
              </div>
              {displayDrawer ? 
              <div className={css(styles.Notifications)}>  
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.length === 0 ? 
                      <li>No new notification for now</li> 
                      : 
                      listNotifications.map((notification) => (
                      <NotificationItem 
                        key={notification.id} 
                        type={notification.type} 
                        html={notification.html} 
                        value={notification.value}
                        markAsRead={this.markAsRead}
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
  }
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

