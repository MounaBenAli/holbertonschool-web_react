import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

//Tests for the courseAction action creators
describe('Tests for courseAction the action creators', () => {
    describe('test for the selectCourse action', () => {
        it('should return: { type: SELECT_COURSE, index: 1 } when calling the creator with 1 as argument', () => {
            const index = 1;
            const expectedAction = { type: SELECT_COURSE, payload: index };
            expect(selectCourse(index)).toEqual(expectedAction);
        });
    });
    
    describe('test for the unSelectCourse action', () => {
        it('should return: { type: UNSELECT_COURSE, index: 1 } when calling the creator with 1 as argument', () => {
            const index = 1;
            const expectedAction = { type: UNSELECT_COURSE, payload: index };
            expect(unSelectCourse(index)).toEqual(expectedAction);
        });
    });
})