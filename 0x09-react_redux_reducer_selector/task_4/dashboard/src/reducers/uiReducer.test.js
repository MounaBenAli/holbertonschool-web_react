import { toJS } from 'immutable';
import {uiReducer} from "./uiReducer";
import {DISPLAY_NOTIFICATION_DRAWER, 
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT 
} from '../actions/uiActionTypes';

// test suite for the reducer
describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    };

    // No action is passed
    it('should return the initial state when no action is passed', () => {
        const res = uiReducer(undefined, {});
        expect(res.toJS()).toEqual(initialState);
    });

    // Irrelevant action (SELECT_COURSE) is passed
    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state.toJS()).toEqual(initialState);
    });

    // Action (DISPLAY_NOTIFICATION_DRAWER) is passed
    it('should change correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.toJS()).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
          });
    });
})