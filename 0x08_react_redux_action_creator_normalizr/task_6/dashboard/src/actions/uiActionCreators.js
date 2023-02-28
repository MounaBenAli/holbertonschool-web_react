import {LOGIN, 
        LOGOUT, 
        DISPLAY_NOTIFICATION_DRAWER,
        HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { bindActionCreators } from 'redux';

// LOGIN
export const login = (email, password) => {
    return {
        type: LOGIN,
        payload: { user : { email, password } }
    }
};
// Bound the login action creator
export const boundLogin =  (email, password) => (dispatch) => {
    dispatch(login(email, password));
};

// LOGOUT
export const logout = () => {
    return {
        type: LOGOUT
    }
};
// Bound the logout action creator
export const boundLogout =  () => (dispatch) => {
    dispatch(logout());
};

// DISPLAY_NOTIFICATION_DRAWER
export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    }
};
// Bound the displayNotificationDrawer action creator
export const boundDisplayNotificationDrawer =  () => (dispatch) => {
    dispatch(displayNotificationDrawer());
};

// HIDE_NOTIFICATION_DRAWER
export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    }
};
// Bound the hideNotificationDrawer action creator
export const boundHideNotificationDrawer =  () => (dispatch) => {
    dispatch(hideNotificationDrawer());
};

// Binding all UI actions
export const uiActions = {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
};

export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);


