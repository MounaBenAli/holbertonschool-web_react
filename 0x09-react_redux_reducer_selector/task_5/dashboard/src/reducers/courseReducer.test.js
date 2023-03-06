import courseReducer, { initialState } from './courseReducer';
import coursesNormalizer from '../schema/courses';
import {
    FETCH_COURSE_SUCCESS,
    UNSELECT_COURSE,
    SELECT_COURSE,
  } from '../actions/courseActionTypes';


describe('courseReducer', () => {
//Default 
  test('returns the default state', () => {
    const action = { type: 'INVALID_ACTION' };
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

  const expectedData = [
    {
      id: 1,
      name: 'ES6',
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: 'Webpack',
      isSelected: false,
      credit: 20,
    },
    {
      id: 3,
      name: 'React',
      isSelected: false,
      credit: 40,
    },
  ];

  const normalizedData = coursesNormalizer(expectedData);
  const action = { type: FETCH_COURSE_SUCCESS, data: normalizedData };
  const state = courseReducer(initialState, action);

  expect(state.toJS()).toEqual(normalizedData);
});
});