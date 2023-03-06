import { createSelector } from 'reselect';
import notificationsReducer from "../reducers/notificationReducer";

const getNotificationsState = (state) => state.notificationsReducer;


export const filterTypeSelected = createSelector(
  getNotificationsState,
  (notifications) => notifications.get('filter')
);

export const getNotifications = createSelector(
  getNotificationsState,
  (notifications) => notifications.get('notifications').toMap()
);

export const getUnreadNotifications = createSelector(
  getNotificationsState,
  (notifications) => notifications.get('notifications').toMap().filter((notification) => !notification.get('isRead'))
);
