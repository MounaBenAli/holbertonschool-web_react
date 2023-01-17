import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>

        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      
      </ul>
      <button
      type="button"
      aria-label="close"
      style={{ 
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: `#fff`,
        float:`right`,
        position:`relative`,
        top: '-142px',
        right: '-16px',
        cursor: 'pointer',
        }} 
      onClick={() => console.log('Close button has been clicked')}
      >
      <img 
      style={{ width: "20px" }}
      src={close_icon}
      alt="close icon"
      />
      </button>
    </div>
  );
};

export default Notifications;