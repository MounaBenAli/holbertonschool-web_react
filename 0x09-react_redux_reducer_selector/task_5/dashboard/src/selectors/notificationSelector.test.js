import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import notificationsReducer from '../reducers/notificationReducer';

describe('Notification Selectors', () => {
  const initialState = Map({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, message: 'Message 1', isRead: false },
      { id: 2, message: 'Message 2', isRead: true },
      { id: 3, message: 'Message 3', isRead: false },
    ],
  });

  it('should return the filter type selected', () => {
    const state = notificationsReducer(initialState, { type: 'SET_TYPE_FILTER', filter: 'READ' });
    expect(filterTypeSelected(state)).toEqual('READ');
  });

  it('should return the list of notifications', () => {
    const state = notificationsReducer(initialState, { type: 'FETCH_NOTIFICATIONS_SUCCESS', data: [
      { id: 4, message: 'Message 4', isRead: false },
      { id: 5, message: 'Message 5', isRead: true },
    ] });
    expect(getNotifications(state)).toEqual(Map({
      1: { id: 1, message: 'Message 1', isRead: false },
      2: { id: 2, message: 'Message 2', isRead: true },
      3: { id: 3, message: 'Message 3', isRead: false },
      4: { id: 4, message: 'Message 4', isRead: false },
      5: { id: 5, message: 'Message 5', isRead: true },
    }));
  });

  it('should return the list of unread notifications', () => {
    const state = notificationsReducer(initialState, { type: 'MARK_AS_READ', id: 1 });
    expect(getUnreadNotifications(state)).toEqual(Map({
      3: { id: 3, message: 'Message 3', isRead: false },
    }));
  });
});
