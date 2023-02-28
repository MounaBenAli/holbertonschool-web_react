import {LOGIN, 
        LOGOUT, 
        DISPLAY_NOTIFICATION_DRAWER,
        HIDE_NOTIFICATION_DRAWER,
        LOGIN_SUCCESS,
        LOGIN_FAILURE } from "./uiActionTypes";

import loginData from '../../dist/login-success.json'

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

// loginSuccess
export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
};

// loginFailure
export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
};

export const loginActions = {
    loginSuccess,
    loginFailure
};

// Async Action Creator: loginRequest
export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        fetch('/login-success.json')
        .then(response => response.json())
        .then(data => dispatch(loginSuccess(data)))
        .catch(error => dispatch(loginFailure()));
  };
};

// Binding all UI actions
export const uiActions = {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest
};

export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);


