import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import {LOGIN,
        LOGOUT,
        DISPLAY_NOTIFICATION_DRAWER,
        HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

//Tests for the uiAction action creators 
describe('Tests for the uiAction action creators', () => {
    //Tests login action
    describe('login action', () => {
        it('should create a LOGIN action with the user object', () => {
            const expectedAction = {
                type: LOGIN,
                payload: {
                  user: {
                    email: 'mouna@gmail.com',
                    password: 'testingpassword'
                  }
                }
            };
            expect(login('mouna@gmail.com', 'testingpassword')).toEqual(expectedAction);
        });
    });

    //Tests logout action
    describe('logout action', () => {
        it('should create a LOGOUT action', () => {
            const expectedAction = {type: LOGOUT};
            expect(logout()).toEqual(expectedAction);
        });
    });

    //Tests displayNotificationDrawer action
    describe('displayNotificationDrawer action', () => {
        it('should create a DISPLAY_NOTIFICATION_DRAWER action', () => {
            const expectedAction = {type: DISPLAY_NOTIFICATION_DRAWER};
            expect(displayNotificationDrawer()).toEqual(expectedAction);
        });
    });

    //Tests hideNotificationDrawer action
    describe('hideNotificationDrawer action', () => {
        it('should create a  HIDE_NOTIFICATION_DRAWER action', () => {
            const expectedAction = {type: HIDE_NOTIFICATION_DRAWER};
            expect(hideNotificationDrawer()).toEqual(expectedAction);
        });
    });
})