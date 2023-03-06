import notificationReducer, { initialState } from './notificationReducer';
import {
FETCH_NOTIFICATIONS_SUCCESS,
MARK_AS_READ,
SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
//Initial State
it('should return the initial state', () => {
    const action = { type: 'TEST_ACTION' };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(initialState);
});

//FETCH_NOTIFICATIONS_SUCCESS
it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
    {
        id: 1,
        type: 'default',
        value: 'New course available',
    },
    {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
    },
    {
        id: 3,
        type: 'urgent',
        value: 'New data available',
    },
    ];
    const action = {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications,
    };
    const expectedState = {
    filter: 'DEFAULT',
    notifications: [
        {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
        },
        {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false,
        },
        {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false,
        },
    ],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
});
//MARK_AS_READ
it('should handle MARK_AS_READ', () => {
    const notifications = [
    {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
    },
    {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false,
    },
    {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false,
    },
    ];
    const action = {
    type: MARK_AS_READ,
    index: 2,
    };
    const expectedState = {
    filter: 'DEFAULT',
    notifications: [
        {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
        },
        {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: true,
        },
        {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false,
        },
    ],
    };
    const state = notificationReducer({ filter: 'DEFAULT', notifications }, action);
    expect(state).toEqual(expectedState);
});
//SET_TYPE_FILTER
it('should handle SET_TYPE_FILTER', () => {
    const action = {
    type: SET_TYPE_FILTER,
    filter: 'URGENT',
    };
    const expectedState = {
    filter: 'URGENT',
    notifications: [],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
});
});
