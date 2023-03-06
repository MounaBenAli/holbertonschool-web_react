import { MARK_AS_READ, SET_TYPE_FILTER, setNotificationFilter} from "./notificationActionTypes";
import { bindActionCreators } from 'redux';

export const markAsAread = (index) => {
return {
    type: MARK_AS_READ,
    payload: index
}
};

export const setNotificationFilter = (filter) => {
return {
    type: SET_TYPE_FILTER,
    payload: filter
}
};

export const notificationActions = {
    markAsAread,
    setNotificationFilter,
};

export const boundNotificationActions = (dispatch) =>
  bindActionCreators(notificationActions, dispatch);