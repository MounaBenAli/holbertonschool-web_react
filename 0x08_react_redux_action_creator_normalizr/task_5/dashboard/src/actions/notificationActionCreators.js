import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";


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
