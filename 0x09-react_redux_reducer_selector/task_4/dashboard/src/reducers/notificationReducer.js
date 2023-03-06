import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications'
import {FETCH_NOTIFICATIONS_SUCCESS, 
        MARK_AS_READ, 
        SET_TYPE_FILTER 
} from '../actions/notificationActionTypes';

export const initialState = Map({
  filter: 'DEFAULT',
  notifications: [],
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep({ notifications: normalizedData.notifications });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.id, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
