import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses'
import {
    FETCH_COURSE_SUCCESS,
    UNSELECT_COURSE,
    SELECT_COURSE,
  } from '../actions/courseActionTypes';



export const initialState = Map({
  courses: [],
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
          const normalizedData = coursesNormalizer(action.data);
        return state.mergeDeep({  courses: normalizedData.entities.courses });
      case SELECT_COURSE:
        return state.setIn(['courses', action.index, 'isSelected'], true);
      case UNSELECT_COURSE:
        return state.setIn(['courses', action.index, 'isSelected'], false);
      default:
        return state;
    }
  };

export default courseReducer;