import {uiReducer, initialState} from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

// test suite for the reducer
describe('uiReducer', () => {
   
    // No action is passed
    it('should return the initial state when no action is passed', () => {
        const res = uiReducer(undefined, {});
        expect(res).toEqual(initialState);
    });

    // Irrelevant action (SELECT_COURSE) is passed
    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const action = {
            type: 'SELECT_COURSE',
            payload: {
              courseId: 1
            }
        };
        expect(uiReducer(initialState, action)).toEqual(initialState);
    });

    // Action (DISPLAY_NOTIFICATION_DRAWER) is passed
    it('should change correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = {
            type: 'DISPLAY_NOTIFICATION_DRAWER'
        };
        const expectedState = {
            ...initialState,
            isNotificationDrawerVisible: true
          };
        expect(uiReducer(initialState, action)).toEqual(expectedState);
    });
})