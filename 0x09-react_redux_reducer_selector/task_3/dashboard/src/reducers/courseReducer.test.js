import courseReducer from './courseReducer';
import {
    FETCH_COURSE_SUCCESS,
    UNSELECT_COURSE,
    SELECT_COURSE,
  } from '../actions/courseActionTypes';


describe('courseReducer', () => {
//Default 
  test('returns the default state', () => {
    const action = { type: 'INVALID_ACTION' };
    const initialState = [];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(initialState);
  });
//FETCH_COURSE_SUCCESS
  test('handles FETCH_COURSE_SUCCESS', () => {
    const courses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
      },
    ];

    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const state = courseReducer(undefined, action);

    expect(state.length).toEqual(courses.length);

    state.forEach((course) => {
      expect(course.isSelected).toEqual(false);
    });
  });
});
