import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

//Tests for the notification action creators 
describe('Tests for notificationActionCreators', () => {
    //Tests markAsRead action
    describe('markAsRead action', () => {
        it('should create a MARK_AS_READ action with the given index', () => {
            const result = markAsRead(1);
            const expected_data = {
                type: MARK_AS_READ,
                index: 1
              };
            expect(result).toEqual(expectedAction);
        });
    });

    //Tests setNotificationFilter action
    describe('setNotificationFilter action', () => {
        it('should create a SET_TYPE_FILTER action with the given filter', () => {
            const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
            const expected_filter = {
                type: SET_TYPE_FILTER,
                filter: 'DEFAULT'
            };
            expect(result).toEqual(expected_filter);
        });
    });
})